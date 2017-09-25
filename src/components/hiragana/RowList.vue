<template>
  <div class="container">
    <div class="mt-5">
      <div class="my-5" v-for="row in section.rows" :key="row.row">
        <div class="card-group">
          <div class="card card-hiragana text-center mb-3" v-for="(character, index) in row" :key="index">
            <div class="card-img-top wf-notosansjapanese">{{ character.character }}</div>
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
  font-size: 3rem;
  margin-bottom: 0;
  background-color: #ffeebb;
}
</style>
