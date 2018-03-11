<template>
	<div class="products">
		<div class="bilboards">
			<div class="container">
				<div class="bilboars_wrapp">
					<div class="bilboars_wrapp-item">
						<h3>NEW SEASON ARRIVALS.</h3>
						<p>CHECK OUT ALL THE NEW BOOKS</p>
						<button>Shop Now</button>
					</div>
				</div>
			</div>
		</div>
		<div class="products">
		    <div class="container">
		      <div class="products_title">
		        <h3>latest products</h3>
		      </div>
		      <div class="products_wrapp">
		        <div class="products_wrapp-item" v-for="(product, index) in products">
		          <router-link :to="{ name: 'detail', params: { id: index } }"><img :src="product.img"/></router-link> <br>
		          <h3>{{ product.title }}</h3> <br>
		          <p>{{ product.price | currency }}</p>
			      <button
					:disabled="!product.inventory"
					@click="addProductToCart(product)">
					Add to cart
			      </button>
		        </div>
		      </div>
		    </div>
	  	</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import shop from '../api/shop.js'
export default {
	name: 'products',
	data() {
		return {

		}
	},
	computed: {
		...mapGetters({
			products: 'allProducts'
		})
	},
	methods: {
		...mapActions([
			'addProductToCart'
		])
	},
	created () {
		this.$store.dispatch('getAllProducts')
	}
}
</script>

<style lang="sass">
.products
	.bilboards
		background-color: #eee
		.bilboars_wrapp
			padding: 140px 0
			.bilboars_wrapp-item
				h3
					color: white
					font-size: 40px
					font-weight: black
					margin: 0
				p
					color: #ffffff
					font-size: 22px
					font-weight: light
					margin: 0
				button
					text-tranform: uppercase
					font-size: 18px
					color: #65889b
					background-color: white
					margin: 15px 0 0 0
					padding: 8px 25px
					border: none
					outline: none
					cursor: pointer
	.products
	  padding: 40px 0
	  .products_title
	    text-align: center
	    padding: 0 0 20px 0
	    h3
	      color: #656363
	      text-transform: uppercase
	      font-size: 20px
	      font-weight: bold
	      margin: 0
	  .products_wrapp
	    display: flex
	    flex-direction: row
	    justify-content: space-between
	    flex-wrap: wrap
	    align-items: center
	    .products_wrapp-item
	      border: 3px solid #eee
	      border-radius: 6px
	      text-align: center
	      width: 30.7%
	      margin: 10px 1%
	      padding: 30px 0
	      a
	      	outline: none
	      h3
	        text-transform: uppercase
	        margin: 10px 0 0 0
	        font-size: 16px
	        font-weight: 300
	        color: gray
	      p
	        margin: 0
	        color: black
	        font-weight: bold
	      button
	      	border: none
	      	background-color: #eee
	      	padding: 8px 25px
	      	margin: 10px 0
	      	cursor: pointer
	      	transition: .4s
	      	&:hover
	      		background-color: gray
@media only screen and (max-width: 991px)
	.menprod .products .products_wrapp .products_wrapp-item
	    width: 44.8%
	    margin: 2%
	    padding: 20px 0
@media only screen and (max-width: 767px)
	.menprod .products .products_wrapp .products_wrapp-item
	    width: 60%
	    margin: 2% auto
	    padding: 20px 0
@media only screen and (max-width: 480px)
	.products .products .products_wrapp
			flex-direction: column
			.products_wrapp-item
	    		width: 90%
</style>
