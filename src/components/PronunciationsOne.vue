<template>
  <div>
    <jumbotron v-on:select="select" 
               v-bind:map="getMap"
               v-bind:current="pronunciations.selected"></jumbotron>
    Pronunciations One
    <p>{{ pronunciations.selected }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import jumbotron from './pronunciationsOne/Jumbotron.vue'
import * as types from 'store/types'

export default {

  components: {
    jumbotron
  },

  computed: {
    ...mapState({
      pronunciations: 'pronunciationsOne',
    }),
    ...mapGetters({
      getCurrent: 'getCurrentPronunciation',
      getMap: 'getMapPronunciations',
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
