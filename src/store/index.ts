import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import editor from './modules/editor'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    editor
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: []
})
