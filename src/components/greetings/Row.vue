<template>
  <div class="card my-5">
    <div class="card-header bg-info">{{ greeting.subject }}</div>
    <div class="card-body">
      <div class="blockquote" v-for="(sentence, index) in greeting.sentences" :key="index">
        <Sentence v-bind:sentence="sentence"></Sentence>
        <h6 class="card-subtitle mb-2 text-muted">{{ sentence.mean }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Sentence from './Sentence.vue'

export default {
  props: [
    'greeting'
  ],

  components: {
    Sentence,
  }
}
</script>

<style>

</style>
