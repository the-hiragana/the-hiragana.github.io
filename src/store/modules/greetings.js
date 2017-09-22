import API from 'api'
import * as types from 'store/types'

const state = {
  content: [
  /*
    {
      "subject": "아침 인사",
      "sentences": [
        {
          "mean": "안녕하세요.",
          "characters": [
            {
              "base": "おはようございます。"
            }
          ]
        },
        {
          "mean": "안녕하세요.",
          "characters": [
            {
              "base": "おはようございます。"
            }
          ]
        }
      ]
    },
    {}
  */
  ]
}

const getters = {
}

const mutations = {
  [types.RECEIVE_GREETINGS] (state, {greetings}) {
    state.content = greetings
  },
}

const actions = {
  [types.FETCH_GREETINGS] (context) {
    API.getGreetings()
      .then(greetings => {
        context.commit(types.RECEIVE_GREETINGS, {greetings})
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
