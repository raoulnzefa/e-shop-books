import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
import products from './modules/products.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  state: {
  	count: 0
  },
  mutations: {
   	increment: state => state.count++,
    decrement: state => state.count = 0
  },
  strict: debug
})
