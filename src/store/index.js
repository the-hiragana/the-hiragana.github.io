import Vue from 'vue'
import Vuex from 'vuex'

import pronounce from './modules/pronounce'
import pronunciationsOne from './modules/pronunciationsOne'
import pronunciationsTwo from './modules/pronunciationsTwo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pronounce,
    pronunciationsOne,
    pronunciationsTwo,
  },

  strict: process.env.NODE_ENV !== 'production'
})
