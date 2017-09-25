import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from 'components/Home.vue'
import hiragana from 'components/Hiragana.vue'
import pronunciationsOne from 'components/PronunciationsOne.vue'
import pronunciationsTwo from 'components/PronunciationsTwo.vue'
import greetings from 'components/Greetings.vue'
import store from 'store'

import './main.css'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/hiragana', component: hiragana },
  { path: '/pronunciations1', component: pronunciationsOne },
  { path: '/pronunciations2', component: pronunciationsTwo },
  { path: '/greetings', component: greetings },
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
