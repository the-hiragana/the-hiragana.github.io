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
