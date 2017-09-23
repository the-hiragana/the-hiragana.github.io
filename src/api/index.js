import axios from 'axios'

export default {

  getPronounce() {
    return axios.get('/api/pronounce.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getFiftyCharacters() {
    return axios.get('/api/c.json')
                .then(response => response.data)
  },

  getPronunciationsOne() {
    return axios.get('/api/p1.json')
                .then(response => response.data)
  },

  getPronunciationsTwo() {
    return axios.get('/api/p2.json')
                .then(response => response.data)
  },

  getGreetings() {
    return axios.get('/api/g.json')
                .then(response => response.data)
  },
}
