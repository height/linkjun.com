require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const pkg = require('../package.json')

function promisify (fn, receiver) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res)
      }])
    })
  }
}

class Init {
  constructor () {
    const pageGroup = 'zebra-pages'
    const group = 'tm'
    this.webpack = promisify(webpack)
    this.spinner = ora('building for production...')
    this.SEED = {
      combine: true,
      modules: {},
      packages: {
        [`${pageGroup}/${pkg.name}`]: {
          debug: true,
          group,
          ignorePackageNameInUri: true,
          path: `//g.alicdn.com/${pageGroup}/${pkg.name}/${pkg.version}/`,
          version: `${pkg.version}`
        }
      }
    }
    this.INDEX = '{"engine":"xtemplate","inputCharset":"utf8","outputCharset":"utf8","data":{}}'
  }

  webpack () {
    return promisify(webpack)
  }

  rm (path) {
    return promisify(rm)(path)
  }

  write (_path, data) {
    _path = path.join(__dirname, '../', _path)
    return promisify(fs.writeFile, fs)(_path, data, 'utf8')
  }

  async _clean () {
    await this.rm(config.build.assetsRoot)
  }

  _sf (json) {
    if (typeof json === 'string') json = JSON.parse(json)
    return JSON.stringify(json)
  }

  async run () {
    try {
      this.spinner.start()
      await this._clean()
      const stats = await this.webpack(webpackConfig)
      this.spinner.stop()
      if (stats.compilation.errors.length > 0) {
        throw new Error(stats.compilation.errors)
      }
      process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      })}\n\n`)

      await Promise.all([
        this.write('./build/seed.json', this._sf(this.SEED)),
        this.write('./build/index.json', this._sf(this.INDEX)),
        this.write('./build/index-pc.json', this._sf(this.INDEX))
      ])

      console.log(chalk.green('  Build complete!\n'))
    } catch (e) {
      this._clean()
      console.log(chalk.red(e))
      throw e
    }
  }
}

new Init().run()
