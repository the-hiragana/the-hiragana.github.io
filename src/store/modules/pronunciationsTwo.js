import API from 'api'
import * as types from 'store/types'

const state = {
  selected: 'HatsuOn',
  content: [
  /*
    {
      "section": "HatsuOn",
      "mean": "발음",
      "kanji": "発音",
      "word": "はつおん",
      "character": "ん",
      "description": "[ん]은 우리말의 받침과 같은 역할을 한다. 뒤에 오는 글자에 따라서 네 가지(ㄴ, ㅇ, ㅁ, ㄴ과 ㅇ의 중간음)으로 발음되며, 다른 글자와 마찬가지로 한 박자로 발음한다.",
      "rows": [
        {
          "row": "1",
          "description": "[ま][ば][ぱ]행의 앞에서는 [m]으로 발음한다.",
          "characters": [
            {
              "word": "うんめい",
              "kanji": "運命",
              "mean": "운명"
            },
            {},
            {},
            {}
          ]
        },
      ]
    {
      "section": "SokuOn"
    },
    {
      "section": "ChōOn"
    }
  */
  ],
}

const getters = {
  getCurrentPronunciationsTwo: state => {
    return state.content.find(pron => pron.section === state.selected)
  },
  getMapPronunciationsTwo: state => {
    return state.content.map(pron => ({
      section: pron.section,
      mean: pron.mean,
    }))
  },
}

const mutations = {
  [types.SELECT_PRONUNCIATIONS_TWO] (state, selected) {
    state.selected = selected
  },
  [types.RECEIVE_PRONUNCIATIONS_TWO] (state, {pronunciations}) {
    state.content = pronunciations
  },
}

const actions = {
  [types.FETCH_PRONUNCIATIONS_TWO] (context) {
    API.getPronunciationsTwo()
      .then(pronunciations => {
        context.commit(types.RECEIVE_PRONUNCIATIONS_TWO, {pronunciations})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
