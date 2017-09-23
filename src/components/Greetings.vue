<template>
  <transition name="fade">
    <div>
      <Jumbotron></Jumbotron>
      <RowList v-bind:greetings="greetings.content"></RowList>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Jumbotron from './greetings/Jumbotron.vue'
import RowList from './greetings/RowList.vue'
import * as types from 'store/types'

export default {

  components: {
    Jumbotron,
    RowList,
  },

  computed: {
    ...mapState([
      'greetings',
    ]),
  },

  methods: {
    ...mapActions({
      fetch: types.FETCH_GREETINGS,
    }),
  },

  created() {
    if (!this.greetings.content.length) {
      this.fetch()
    }
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
