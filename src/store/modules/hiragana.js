import API from 'api'
import * as types from 'store/types'

const state = {
  selected: undefined,
  content: [
  /*
    {
      "section": "hiragana",
      "mean": "히라가나",
      "kanji": "平仮名",
      "hurigana": "ひらがな",
      "description": "",
      "rows": [
      ]
    },
    {
      "section": "katakana",
    }
  */
  ]
}

const getters = {
  getCurrentHiragana: state => {
    return state.content.find(hiragana => hiragana.section === state.selected)
  },
  getMapHiragana: state => {
    return state.content.map(hiragana => ({
      section: hiragana.section,
      mean: hiragana.mean,
    }))
  },
}

const mutations = {
  [types.SELECT_HIRAGANA] (state, selected) {
    state.selected = selected
  },
  [types.RECEIVE_HIRAGANA] (state, {hiraganas}) {
    state.selected = hiraganas[0]['section']
    state.content = hiraganas
  },
}

const actions = {
  [types.FETCH_HIRAGANA] (context) {
    API.getHiragana()
      .then(hiraganas => {
        context.commit(types.RECEIVE_HIRAGANA, {hiraganas})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
