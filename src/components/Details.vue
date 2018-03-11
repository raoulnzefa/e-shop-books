<template>
	<div class="item" >
		<div class="container">
			<div class="item_wrapp" v-if="product">
				<div class="item_wrapp-img">
					<div>
						<p @click="ProductView = true"><img  style="cursor: pointer;" :src="product.img"/></p>
						<p @click="ProductView = false"><img src="/static/book.png" style="cursor: pointer;"></p>
					</div>
					<div>
						<img v-if="ProductView" :src="product.img"/>
						<img v-else="ProductView" src="/static/book.png">
					</div>
				</div>
				<div class="item_wrapp-items">
					<h2>{{ product.title }}</h2>
					<h3>{{ product.body }}</h3>
					<h1>{{ product.price | currency }} </h1>
					<button
						:disabled="!product.inventory"
						@click="addProductToCart(product)">
						Add to cart
					</button> <br>
					<router-link to="/">
						<button>Back to shop</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import shop from '../api/shop.js'

export default {
	data () {
		return {
			ProductView: true
		}
	},
	computed: mapGetters({
		products: 'allProducts',
	}),
	methods: {
		switchView: function(view) {
			this.ProductView = view
		},
		...mapActions([
			'addProductToCart'
		])
	},
	mounted: function () {
	  window.scroll(0, 0)
	},
	created () {
		this.$store.dispatch('getAllProducts')

		var productId = this.$route.params.id

		this.product = this.products[productId]
	}
}
</script>

<style lang="sass">
.item
	border: 1px solid #eee
	padding: 40px 0
	.item_wrapp
		display: flex
		img
			width: 120px
			height: 183px
		.item_wrapp-img
			display: flex
			flex-direction: row
			align-items: center
			justify-content: space-between
			padding-right: 30px
			width: 50%
		.item_wrapp-items
			padding-left: 30px
			width: 50%
			h3
				color: gray
@media only screen and (max-width: 991px)
	.item .item_wrapp .item_wrapp-items h3
		font-size: 16px
@media only screen and (max-width: 767px)
	.item .item_wrapp
		flex-direction: column
		align-items: center
		.item_wrapp-img
			width: 100%
			padding: 0
		.item_wrapp-items
			width: 100%
			padding: 0
</style>
