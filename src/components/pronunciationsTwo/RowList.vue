<template>
  <div class="container pt-3">
    <h2>{{ section.mean }}</h2>
    <div class="alert alert-info p-5" role="alert">
      <div class="row">
        <div class="col-md-2 text-center" v-if="section.character">
          <h1 class="display-1">{{ section.character }}</h1>
        </div>
        <div class="col">
          <h4>{{ section.description }}</h4>
        </div>
      </div>
    </div>
    <div class="my-4" v-for="row in section.rows" :key="row.row">
      <h4 class="circle text-center">{{ row.row }}</h4>
      <h4 class="p-3 mb-2 bg-description">{{ row.description }}</h4>
      <div class="row">
        <div class="col-sm-4 text-left mb-3" v-for="(character, index) in row.characters" :key="index">
          <span class="h5 text-danger">{{ character.word }}</span>
          <span class="h5">{{ character.mean }}</span>
        </div>
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
.bg-description {
  background-color: #b3dcfc;
}

.circle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;

  /* position: absolute; */
  right: 20px;
  top: 50px;
  background-color: #ff6969;
}
</style>
