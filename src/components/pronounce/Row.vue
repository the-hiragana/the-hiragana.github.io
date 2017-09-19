<template>
  <div class="my-5">
    <button type="button" class="btn btn-outline-secondary mb-3">{{ row.row }}</button>
    <div class="card-group mb-3">
      <div class="card card-pron text-center" v-for="(character, index) in row.characters" :key="index">
        <div class="phonetic circle" v-if="character.phonetic">{{ character.phonetic }}</div>
        <div class="card-title">{{ character.character }}</div>
        <div class="card-body">
          <p class="mb-0">{{ character.word }}</p>
          <p class="mb-0">{{ character.mean }}</p>
        </div>
      </div>
    </div>
    <p><span class="badge badge-success">TIP</span> {{ row.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['row']
}
</script>

<style>
.card-group .card:first-child .card-title {
  border-top-left-radius: 10px;
}

.card-group .card:last-child .card-title {
  border-top-right-radius: 10px;
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
