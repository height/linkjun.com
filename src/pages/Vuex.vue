<template>
  <div>
    <pre>data = {{editor}}</pre>
    <input v-model="item">
    <button @click="add(item)"> 增加 {{item}} 到data</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  data () {
    return {
      item: ''
    }
  },
  computed: {
    ...mapState(['editor'])
  },
  methods: {
    ...mapActions(['addFoo']),
    add (value) {
      if (!value) return
      this.addFoo(value)
      this.item = ''
    },
  },
})
</script>
