'use strict'
const path = require('path')
const pkg = require('../package.json')
let config = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    host: '0.0.0.0',
    port: 8233,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, '../index.html'),
    indexPc: path.resolve(__dirname, '../build/index-pc.xtpl'),
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'static',
    assetsPublicPath: `./build/`,
    productionSourceMap: false,
    devtool: '#hidden-source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
    // 是否覆盖式发布，选是将开启 md5 戳，更利于缓存重用，需要修改 gitlab 仓库
    coveredPublishing: false
  }
}

if (config.build.coveredPublishing) {
  config.build.assetsPublicPath = `//g.alicdn.com/zebra-pages/${pkg.name}/`
}

module.exports = config
