import API from 'api'
import * as types from 'store/types'

const state = {
  selected: undefined,
  content: [
  /*
    {
      "section": "SeiOn",
      "mean": "청음",
      "kanji": "清音",
      "word": "せいおん",
      "description": "청음이란 깨끗한 소리로 발음되는 것을 말한다.",
      "rows": [
        {
          "row": "あ행",
          "description": "「あ·い·う·え·お」는 일본어의 모음이며, 발음은 우리말의 [아·이·우·에·오]와 비슷하다.",
          "characters": [
            {
              "character": "あ",
              "phonetic": "a",
              "word": "あり",
              "mean": "개미"
            },{},{},{},{}
          ]
        }
      ]
    },
    {
      "section": "DakuOn"
    },
    {
      "section": "YōOn"
    }
  */
  ]
}

const getters = {
  getCurrentPronunciationsOne: state => {
    return state.content.find(pron => pron.section === state.selected)
  },
  getMapPronunciationsOne: state => {
    return state.content.map(pron => ({
      section: pron.section,
      mean: pron.mean,
    }))
  },
}

const mutations = {
  [types.SELECT_PRONUNCIATIONS_ONE] (state, selected) {
    state.selected = selected
  },
  [types.RECEIVE_PRONUNCIATIONS_ONE] (state, {pronunciations}) {
    state.selected = pronunciations[0]['section']
    state.content = pronunciations
  },
}

const actions = {
  [types.FETCH_PRONUNCIATIONS_ONE] (context) {
    API.getPronunciationsOne()
      .then(pronunciations => {
        context.commit(types.RECEIVE_PRONUNCIATIONS_ONE, {pronunciations})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
