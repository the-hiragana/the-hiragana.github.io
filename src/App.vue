<template>
  <div class="">
    <navbar></navbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Navbar from './components/app/Navbar.vue'
import AppFooter from './components/app/Footer.vue'

export default {
  name: 'app',

  components: {
    Navbar,
    AppFooter,
  }
}
</script>

<style>

</style>
