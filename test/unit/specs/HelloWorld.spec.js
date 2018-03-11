import Vue from 'vue'
import products from '@/components/products'
import Navigation from '@/components/Navigation'
import cart from '@/components/cart'
import undeground from '@/components/undeground'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Support from '@/components/Support'
// import ShoppingCart from '@/components/ShoppingCart'

describe('products.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(products)
   const vm = new Constructor().$mount()
 })
})

describe('Navigation.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(Navigation)
   const vm = new Constructor().$mount()
 })
})

describe('cart.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(cart)
   const vm = new Constructor().$mount()
 })
})

describe('undeground.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(undeground)
   const vm = new Constructor().$mount()
 })
})

describe('About.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(About)
   const vm = new Constructor().$mount()
 })
})

describe('Blog.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(Blog)
   const vm = new Constructor().$mount()
 })
})

describe('Support.vue', () => {
 it('should render correct contents', () => {
   const Constructor = Vue.extend(Support)
   const vm = new Constructor().$mount()
 })
})

// describe('ShoppingCart.vue', () => {
//  it('should render correct contents', () => {
//    const Constructor = Vue.extend(ShoppingCart)
//    const vm = new Constructor().$mount()
//  })
// })
