<template>
  <div>
    异步加载的页面
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 'bbb'
    }
  },
  methods: {
    async run () {
      console.log(this.a)
    }
  }
})
</script>
