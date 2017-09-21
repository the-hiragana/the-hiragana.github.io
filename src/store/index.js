import Vue from 'vue'
import Vuex from 'vuex'

import pronounce from './modules/pronounce'
import pronunciationsOne from './modules/pronunciationsOne'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pronounce,
    pronunciationsOne,
  },

  strict: process.env.NODE_ENV !== 'production'
})
