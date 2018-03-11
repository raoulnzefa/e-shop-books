import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { currency } from './currency'
import Vuelidate from 'vuelidate'
import 'babel-polyfill'

Vue.use(Vuelidate)
Vue.filter('currency', currency)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
	load: {
	  key: 'AIzaSyDW72V7a7rqjmf3UOvdLg1CWCU1BMCEn3w',
	  v: 3.25
	}
}),

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
