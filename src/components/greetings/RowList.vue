<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-for="(greeting, index) in greetings" :key="index">
        <Row :greeting="greeting"></Row>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './Row.vue'

export default {
  props: [
    'greetings',
  ],

  components: {
    Row,
  },
}
</script>

<style>

</style>
