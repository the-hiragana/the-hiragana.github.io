<template>
  <div class="my-5">
    <h4 class="p-3 mb-2 bg-description">
      <span class="badge badge-pill badge-danger">{{ row.row }}</span> {{ row.description }}
    </h4>
    <div class="row">
      <div class="col-sm-4 text-left mb-3" v-for="(character, index) in row.characters" :key="index">
        <span class="h5 text-danger">{{ character.word }}</span>
        <span class="h5">{{ character.mean }}</span>
      </div>
    </div>
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
.bg-description {
  background-color: #b3dcfc;
}
</style>
