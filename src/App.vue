<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld title="Welcome to My Vue.js App"></HelloWorld>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
