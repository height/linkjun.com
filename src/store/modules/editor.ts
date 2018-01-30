import {
  ADD_FOO
} from '../mutation-types'

const mutations = {
  [ADD_FOO] (state, value) {
    console.info(value)
    state.editor.push(value)
  }
}

export default {
  state: {
    editor: [1, 2, 3]
  },
  mutations
}
