<template>
  <div id="app">
    <h1>hello, Vue</h1>
    <ul>
      <li v-for="item of menu">
        <router-link :to="item.link">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view class="page"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app',
  computed: {
    menu () {
      let $router:any = this.$router
      let routes = $router.options.routes
      return routes.map(item => {
        return {
          link: item.path,
          title: item.meta.title
        }
      })
    }
  }
})
</script>

<style lang="stylus">
  html {
    font-size 12px
  }
</style>

<style lang="stylus" scoped>
  // 不带 scoped 的样式会作用到全局
  // http://stylus-lang.com/ stylus 语法，比 less 更强大，括号冒号分号可缺省

  ul {
    list-style none
  }

  .page {
    border 1px solid #ccc
    width 80%
    height 500px
    margin 0 auto
  }
</style>
