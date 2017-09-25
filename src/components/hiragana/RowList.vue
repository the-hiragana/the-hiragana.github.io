<template>
  <div class="container">
    <div class="mt-5">
      <div class="my-5" v-for="row in section.rows" :key="row.row">
        <div class="card-group">
          <div class="card card-hiragana text-center mb-3"
               v-for="(character, index) in row"
               v-bind:key="index"
               v-bind:class="[!character.character ? 'd-none d-sm-block' : '', '']">
            <div class="card-img-top wf-notosansjapanese" v-if="character.character">
              <h1 class="display-4 py-3 mb-0">{{ character.character }}</h1>
            </div>
            <div class="card-body">
              <h5 class="card-title mb-0">{{ character.word }}</h5>
              <p class="card-text mb-0">{{ character.mean }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'section',
  ],
}
</script>

<style>
.card-hiragana .card-img-top {
  background-color: #ffeebb;
}
</style>
