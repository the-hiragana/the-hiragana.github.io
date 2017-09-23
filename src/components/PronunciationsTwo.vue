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
import Jumbotron from './pronunciationsTwo/Jumbotron.vue'
import RowList from './pronunciationsTwo/RowList.vue'
import * as types from 'store/types'

export default {

  components: {
    Jumbotron,
    RowList,
  },

  computed: {
    ...mapState({
      pronunciations: 'pronunciationsTwo',
    }),
    ...mapGetters({
      getCurrent: 'getCurrentPronunciationsTwo',
      getMap: 'getMapPronunciationsTwo',
    })
  },

  methods: {
    ...mapMutations({
      select: types.SELECT_PRONUNCIATIONS_TWO,
    }),
    ...mapActions({
      fetch: types.FETCH_PRONUNCIATIONS_TWO,
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
