import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

axios.defaults.baseURL='https://hogar-123.herokuapp.com/api/'
// axios.defaults.baseURL='http://localhost:5000/api/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
