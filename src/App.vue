<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import footerBar from './components/footerBar.vue'
import './assets/css/reset.css'

export default {
  name: 'App',
  components: {
    navBar, 
    footerBar
  }
}
</script>

<style>

</style>
