<template>
  <div class="container pt-3">
    <!-- <h2>{{ section.mean }}</h2> -->
    <div class="alert alert-info px-5 py-4" role="alert">
      <div class="row">
        <div class="col-md-2 text-center" v-if="section.character">
          <span class="display-1">{{ section.character }}</span>
        </div>
        <div class="col">
          <h4>{{ section.description }}</h4>
        </div>
      </div>
    </div>
    <Row v-for="row in section.rows" :key="row.row" :row="row"></Row>
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
