import shop from '../../api/shop'
var STORAGE_KEY = 'eshop-edf98506d72db3e8c9d636fdb425c7fd'

// initial state
const state = {
  added: [],
  checkoutStatus: null
  // JSON.parse(window.localStorage.getItem(this.STORAGE_KEY) || '[]'),
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        img: product.img,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }

}

// actions
const actions = {

  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit('setCheckoutStatus', null)
    window.localStorage.clear()
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed'),
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.added))
    if (product.inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      }
      else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('decrementProductInventory', { id: product.id })
    }
  }
}


// mutations
const mutations = {

  removeCartItems (state, item) {
    const index = state.added.find(added => added.id === item.id)
    state.added.splice(index, 1)
  },

  pushProductToCart (state, { id }) {
    state.added.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.added = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
