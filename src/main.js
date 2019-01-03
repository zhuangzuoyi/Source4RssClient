import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import xml2js from 'xml2js'
import "./../node_modules/spectre.css/dist/spectre-exp.css"
import "./../node_modules/spectre.css/dist/spectre-icons.css"
import "./../node_modules/spectre.css/dist/spectre.css"
import "./../node_modules/spectre.css/docs/dist/docs.css"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
