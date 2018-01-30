<template>
  <div class="home">
    <h1>Link Jun</h1>
    
    <h2>
      linkjun.com
    </h2>
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
<style lang="stylus" scoped>
  h1{
    font-size 30px
  }
  h1,h2 {
    text-align center 
    margin 30px auto
  }
  
</style>
