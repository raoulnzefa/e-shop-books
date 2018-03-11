import Vue from 'vue'
import Router from 'vue-router'
import products from '@/components/products.vue'
import Support from '@/components/Support.vue'
import About from '@/components/About.vue'
import Blog from '@/components/Blog.vue'
import Details from '@/components/Details.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/', name: 'products', component: products},
		{path: '/Support', name: 'Support', component: Support},
		{path: '/About', name: 'About', component: About},
		{path: '/Blog', name: 'Blog', component: Blog},
		{path: '/detail/:id', name: 'detail', component: Details},
		{path: '/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart}
	]
})
