<template>
  <div id="app">
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

<style lang="stylus">
  @import './styles/main'
</style>
