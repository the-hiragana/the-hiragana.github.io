import axios from 'axios'

export default {

  getPronounce() {
    return axios.get('/api/pronounce.json')
                .then(response => response.data)
                .catch(error => error)
  },
}
