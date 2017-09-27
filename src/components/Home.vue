<template>
  <transition name="fade">
    <div>
      <Jumbotron></Jumbotron>
    </div>
  </transition>
</template>

<script>
import Jumbotron from './home/Jumbotron.vue'

export default {

  components: {
    Jumbotron,
  },
}
</script>

<style>

</style>
