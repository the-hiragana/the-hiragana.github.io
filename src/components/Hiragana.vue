<template>
  <transition name="fade">
    <div>
      <Jumbotron v-on:select="select"
                 v-bind:map="getMap"
                 v-bind:current="hiragana.selected"></Jumbotron>
      <RowList v-bind:section="getCurrent"
               v-if="getCurrent"></RowList>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Jumbotron from './hiragana/Jumbotron.vue'
import RowList from './hiragana/RowList.vue'
import * as types from 'store/types'

export default {

  components: {
    Jumbotron,
    RowList,
  },

  computed: {
    ...mapState([
      'hiragana'
    ]),
    ...mapGetters({
      getCurrent: 'getCurrentHiragana',
      getMap: 'getMapHiragana',
    })
  },

  methods: {
    ...mapMutations({
      select: types.SELECT_HIRAGANA,
    }),
    ...mapActions({
      fetch: types.FETCH_HIRAGANA,
    })
  },

  created() {
    if (!this.hiragana.content.length) {
      this.fetch()
    }
  },
}
</script>

<style>

</style>
