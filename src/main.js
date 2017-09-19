import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from 'components/Home.vue'
import hiragana from 'components/Hiragana.vue'
import pronounce from 'components/Pronounce.vue'
import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/hiragana', component: hiragana },
  { path: '/pronounce', component: pronounce },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
