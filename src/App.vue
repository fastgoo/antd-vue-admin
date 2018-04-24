<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created(){
      this.$store.dispatch('startSocketClient')
    }
  }
</script>
<style>
  @import "../static/css/main.css";
</style>
