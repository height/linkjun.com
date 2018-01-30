import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Vuex from '@/pages/Vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home, // 同步
      meta: {
        title: '首页'
      }
    },
    {
      path: '/async',
      component: (resolve:any) => import (/* webpackChunkName: 'Async' */ '@/pages/Async').then(resolve),
      meta: {
        title: '异步 chunk'
      }
    },

    {
      path: '/vuex',
      component: (resolve:any) => import (/* webpackChunkName: 'Vuex' */ '@/pages/Vuex').then(resolve),
      meta: {
        title: 'vuex'
      }
    }
  ]
})
