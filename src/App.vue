<template>
  <div class="">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/app/Navbar.vue'

export default {
  name: 'app',

  components: { Navbar }
}
</script>

<style>

</style>
