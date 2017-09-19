<template>
  <div class="container">
    <div class="mt-5" v-for="section in pronounce" :key="section.section">
      <h2>{{ section.section }}</h2>
      <Row v-for="row in section.rows" :key="row.row" v-bind:row="row"></Row>
    </div>
  </div>
</template>

<script>
import Row from './Row.vue'

export default {
  components: { Row },

  props: ['pronounce']
}
</script>

<style>

</style>
