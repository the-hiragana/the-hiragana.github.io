<template>
  <div>
    <Jumbotron></Jumbotron>
    <RowList v-bind:greetings="greetings.content"></RowList>
  </div>
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

</style>
