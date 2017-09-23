<template>
  <div>
    <template v-if="pronunciations.content.length">
      <Jumbotron v-on:select="select" 
                 v-bind:map="getMap"
                 v-bind:current="pronunciations.selected"></Jumbotron>
      <RowList v-bind:section="getCurrent"></RowList>
    </template>
    <template v-else>
      <div class="container">
        <h1>Loading...</h1>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Jumbotron from './pronunciationsOne/Jumbotron.vue'
import RowList from './pronunciationsOne/RowList.vue'
import * as types from 'store/types'

export default {

  components: {
    Jumbotron,
    RowList,
  },

  computed: {
    ...mapState({
      pronunciations: 'pronunciationsOne',
    }),
    ...mapGetters({
      getCurrent: 'getCurrentPronunciationsOne',
      getMap: 'getMapPronunciationsOne',
    })
  },

  methods: {
    ...mapMutations({
      select: types.SELECT_PRONUNCIATIONS_ONE,
    }),
    ...mapActions({
      fetch: types.FETCH_PRONUNCIATIONS_ONE,
    })
  },

  created() {
    if (!this.pronunciations.content.length) {
      this.fetch()
    }
  },
}
</script>

<style>

</style>
