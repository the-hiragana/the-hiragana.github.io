<template>
  <transition name="fade">
    <div>
      <Jumbotron></Jumbotron>
      <Sample></Sample>
    </div>
  </transition>
</template>

<script>
import Jumbotron from './home/Jumbotron.vue'
import Sample from './home/Sample.vue'

export default {

  components: {
    Jumbotron,
    Sample,
  },
}
</script>

<style>

</style>
