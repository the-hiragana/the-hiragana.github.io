<template>
  <div class="mt-3">
    <h4>{{ row.row }}</h4>
    <div class="card-group">
      <div class="card bg-pron mb-3" v-for="(character, index) in row.characters" :key="index">
        <div class="phonetic circle text-center">{{ character.phonetic }}</div>
        <div class="card-body">
          <h4 class="card-pron text-center">{{ character.character }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['row']
}
</script>

<style>
.bg-pron {
  background-color: #ffbbbb
}

.card-pron {
  font-size: 3rem;
}

.phonetic {
  position: absolute;
  right: 10px;
  top: -15px;
  background-color: #ff6969;
}

.circle {
  border-radius: 50%;
	width: 30px;
	height: 30px; 
}
</style>
