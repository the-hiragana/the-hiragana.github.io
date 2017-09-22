<template lang="html">
  <p class="card-title">
    <template v-for="ch in sentence.characters">
      <ruby v-if="ch.ruby">
        {{ ch.base }} <rp>(</rp><rt>{{ ch.ruby }}</rt><rp>)</rp>
      </ruby>
      <span v-else>{{ ch.base }}</span>
    </template>
  </p>
</template>

<script>
export default {
  props: [
    'sentence',
  ],
}
</script>

<style lang="css">

</style>
