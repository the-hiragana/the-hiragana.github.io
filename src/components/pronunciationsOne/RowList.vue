<template>
  <div class="container">
    <div class="mt-5">
      <h2>{{ section.mean }}</h2>
      <div class="my-5" v-for="row in section.rows" :key="row.row" v-bind:row="row">
        <button type="button" class="btn btn-outline-secondary mb-3">{{ row.row }}</button>
        <div class="card-group">
          <div class="card card-pron text-center mb-3" v-for="(character, index) in row.characters" :key="index">
            <div class="phonetic circle" v-if="character.phonetic">{{ character.phonetic }}</div>
            <div class="card-title wf-notosansjapanese">{{ character.character }}</div>
            <div class="card-body">
              <p class="mb-0">{{ character.word }}</p>
              <p class="mb-0">{{ character.mean }}</p>
            </div>
          </div>
        </div>
        <p><span class="badge badge-success">TIP</span> {{ row.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['section']
}
</script>

<style>
.card-group .card .card-title {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

@media (min-width: 576px) {
  .card-group .card:not(:first-child) .card-title {
    border-top-left-radius: 0;
    }
  .card-group .card:not(:last-child) .card-title {
    border-top-right-radius: 0;
  }
}

.card-pron {
  border-color: #fff;
}

.card-pron .card-title {
  font-size: 3rem;
  margin-bottom: 0;
  background-color: #ffbbbb;
}

.card-pron .card-body {
  padding: .75rem;
  background-color: #f6f6f6;
}

.card-pron .phonetic {
  position: absolute;
  right: 5px;
  top: -15px;
  background-color: #ff6969;
}

.circle {
  border-radius: 50%;
	width: 30px;
	height: 30px; 
}
</style>
