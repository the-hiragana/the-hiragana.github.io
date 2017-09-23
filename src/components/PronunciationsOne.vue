<template>
  <transition name="fade">
    <div>
      <Jumbotron v-on:select="select" 
                 v-bind:map="getMap"
                 v-bind:current="pronunciations.selected"></Jumbotron>
      <RowList v-bind:section="getCurrent"
               v-if="getCurrent"></RowList>
    </div>
  </transition>
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
