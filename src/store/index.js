import Vue from 'vue'
import Vuex from 'vuex'

import pronounce from './modules/pronounce'
import pronunciationsOne from './modules/pronunciationsOne'
import pronunciationsTwo from './modules/pronunciationsTwo'
import greetings from './modules/greetings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pronounce,
    pronunciationsOne,
    pronunciationsTwo,
    greetings,
  },

  strict: process.env.NODE_ENV !== 'production'
})
