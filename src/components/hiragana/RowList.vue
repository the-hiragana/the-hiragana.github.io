<template>
  <div class="container">
    <div class="mt-5">
      <Row v-for="row in section.rows" :key="row.row" :row="row"></Row>
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
