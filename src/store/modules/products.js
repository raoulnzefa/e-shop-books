import shop from '../../api/shop'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all

  // filteredProducts: state => {
  //   return state.products.filter(product => product)
  // },

  // donefilteredProducts: (state, getters) => {
  //   return getters.filteredProducts.length
  // }
}
// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
