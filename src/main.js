import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './home/Home.vue'
import hiragana from './hiragana/Hiragana.vue'
import pronounce from './pronounce/Pronounce.vue'

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
  render: h => h(App)
})
