import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const originTitle = document.title
router.beforeEach((to:any, from:Object, next:any) => {
  let title
  if (to.path === '/') {
    title = originTitle
  } else {
    title = `${to.meta.title} - ${originTitle}`
  }
  document.title = title
  next()
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
