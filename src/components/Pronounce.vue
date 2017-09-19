<template>
  <div>
    <PronounceList v-bind:pronounce="pronounce.content"></PronounceList>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Jumbo from './pronounce/Jumbo.vue'
import PronounceList from './pronounce/List.vue'
import * as types from 'store/types'

export default {
  components: { Jumbo, PronounceList },

  computed: mapState([
    'pronounce'
  ]),

  created() {
    this.fetchPronounce()
  },

  methods: {
    fetchPronounce() {
      if (!this.$store.state.pronounce.content.length) {
        this.$store.dispatch({
          type: types.FETCH_PRONOUNCE
        })
      }
    }
  }
}
</script>

<style>

</style>
