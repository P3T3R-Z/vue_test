<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import footer from "@/components/footers";
export default {
  name: 'App',
  components:{
    Footer: footer
  }
}
</script>

<style>
@import "./assets/scss/base.css";
html{
  -webkit-tap-highlight-color: transparent
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom:3rem;
  max-width: 750px;
  overflow-x: hidden;
}
</style>
