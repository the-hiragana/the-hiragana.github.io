import Vue from 'vue'
import Vuex from 'vuex'

import pronounce from './modules/pronounce'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pronounce,
  },

  strict: process.env.NODE_ENV !== 'production'
})
