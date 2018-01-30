<template>
  <div class="home">
    首页
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 'aaaaaaaaaaaaa'
    }
  },
  methods: {
    async run () {
      console.log(this.a)
    }
  }
})
</script>
