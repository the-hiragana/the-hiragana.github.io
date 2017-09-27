<template>
  <div class="container">
    <div class="mt-5">
      <div class="my-5" v-for="row in section.rows" :key="row.row">
        <Row :row="row"></Row>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './Row.vue'

export default {
  props: [
    'section',
  ],

  components: {
    Row,
  },
}
</script>

<style>

</style>
