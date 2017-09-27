<template>
  <div class="jumbotron jumbotron-fluid pb-0">
    <div class="container pb-4">
      <h1 class="display-3">はつおん1</h1>
      <p class="lead">발음</p>
    </div>
    <div class="d-flex justify-content-center">
      <ul class="nav nav-tabs">
        <li class="nav-item" v-for="pron in map" :key="pron.section">
          <a class="nav-link" href="" v-bind:class="[current === pron.section ? 'active' : '']" v-on:click="select(pron.section, $event)">{{ pron.mean }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'map',
    'current',
  ],

  methods: {
    select(selected, event) {
      if (event) {
        event.preventDefault()
      }
      this.$emit('select', selected)
    }
  }
}
</script>

<style>

</style>
