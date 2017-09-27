<template>
  <div class="my-5">
    <button type="button" class="btn btn-outline-secondary mb-3">{{ row.row }}</button>
    <div class="card-group">
      <div class="card card-pron text-center mb-3"
           v-for="(character, index) in row.characters"
           v-bind:key="index"
           v-bind:class="[!character.character ? 'd-none d-sm-block' : '', '']">
        <div class="phonetic circle rounded-circle" v-if="character.phonetic">{{ character.phonetic }}</div>
        <div class="card-img-top wf-notosansjapanese" v-if="character.character">
          <h1 class="display-4 py-3 mb-0">{{ character.character }}</h1>
        </div>
        <div class="card-body">
          <h5 class="card-title mb-0">{{ character.word }}</h5>
          <p class="card-text mb-0">{{ character.mean }}</p>
        </div>
      </div>
    </div>
    <p><span class="badge badge-success">TIP</span> {{ row.description }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'row',
  ],
}
</script>

<style>
.card-pron {
  border-color: #fff;
}

.card-pron .phonetic {
  position: absolute;
  right: 5px;
  top: -15px;
  width: 30px;
  height: 30px;
  background-color: #ff6969;
}

.card-pron .card-img-top {
  background-color: #ffbbbb;
}

.card-pron .card-body {
  background-color: #f6f6f6;
}
</style>
