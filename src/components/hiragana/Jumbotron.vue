<template>
  <div class="jumbotron jumbotron-fluid pb-0">
    <div class="container pb-4">
      <h1 class="display-4 wf-notosansjapanese">50おんず</h1>
      <p class="lead mb-0">50음도</p>
    </div>
    <div class="d-flex justify-content-center">
      <ul class="nav nav-tabs">
        <li class="nav-item" v-for="character in map" :key="character.section">
          <a class="nav-link" href="" v-bind:class="[current === character.section ? 'active' : '']" v-on:click="select(character.section, $event)">{{ character.mean }}</a>
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
