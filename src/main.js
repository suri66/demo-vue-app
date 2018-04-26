// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Home from './components/Footer'
import HelloWorld from './components/HelloWorld'
// import router from './router'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users',
      component: HelloWorld
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:
  `<div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
    </ul>
    <router-view></router-view>
  </div>`
  // template: '<App/>',
  // components: { App }
})
