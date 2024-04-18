<template>
  <div id="app">
    <navBar />
    <router-view></router-view>
    <footerBar />
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import footerBar from './components/footerBar.vue'
import './assets/css/_reset.scss'
import './assets/css/_global.scss'
import './assets/css/_fonts.scss'
import './assets/css/_responsive.scss'


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
