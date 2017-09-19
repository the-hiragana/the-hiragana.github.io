import API from 'api'
import * as types from 'store/types'

const state = {
  content: [
    /*
    {
      "section": "청음",
      "description": "청음이란 깨끗한 소리로 발음되는 것을 말한다.",
      "kanji": "清音",
      "ruby": "せいおん",
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
      },
    },
    */
  ]
}

const getters = {
}

const actions = {
  [types.FETCH_PRONOUNCE] (context) {
    API.getPronounce()
      .then(pronounce => {
        context.commit(types.RECEIVE_PRONOUNCE, { pronounce })
      })
  },
}

const mutations = {
  [types.RECEIVE_PRONOUNCE] (state, { pronounce }) {
    state.content = pronounce
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
