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
                .catch(error => error)
  },

  getPronunciationsOne() {
    return axios.get('/api/p1.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getPronunciationsTwo() {
    return axios.get('/api/p2.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getGreetings() {
    return axios.get('/api/g.json')
                .then(response => response.data)
                .catch(error => error)
  },
}
