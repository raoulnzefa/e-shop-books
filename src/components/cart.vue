<template>
	<div class="header_wrapp-item">
		<div class="cart" @click="ModalCart = true">
			<div class="cart_icon" style="cursor: pointer;">
				<shopping-cart-icon class="custom-class"></shopping-cart-icon>
				{{ total | currency}} <div class="count">{{ count }}</div>
			</div>
		</div>
		<transition name="animaterouter">
			<div class="modal-cart" v-show="ModalCart">
				<div class="modal-cart-container">
					<div class="modal-cart-container-item">
						<div class="title">
							<div><h2>Your Cart</h2></div>
							<div><p v-show="!products.length"><i>Please add some products to cart.</i></p></div>
							<div style="height: 50px; width: 50px">
								<span @click="ModalCart = false"><x-icon class="custom-class"></x-icon></span>
							</div>
						</div> 
						<div class="cart_wrapp-item" v-for="product in products">
							<div>
								<img :src="product.img"/>
								<h3>{{ product.title }}</h3>
							</div>
							<div>	
								{{ product.price | currency }} x {{ product.quantity }}
							</div>
						</div>
						<router-link to="/ShoppingCart"><p><button @click="ModalCart = false">Checkout</button></p></router-link>
						<p>Total: {{ total | currency }}</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { ShoppingCartIcon, XIcon } from 'vue-feather-icons'
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
	export default {
		data () {
			return {
				ModalCart: false
			}
		},
		components: {
			ShoppingCartIcon,
			XIcon
		},
		computed: {
		    ...mapGetters({
		      products: 'cartProducts',
		      checkoutStatus: 'checkoutStatus',
		      total: 'cartTotalPrice'
		    }),
		    ...mapState([
		    	'count'
		    ])
		},
		methods: {
		    checkout (products) {
		       this.$store.dispatch('checkout', products)
		    }
		}
	}
</script>

<style lang="sass">
.animaterouter-enter-active, .animaterouter-leave-active
  transition: opacity .5s
.animaterouter-enter, .animaterouter-leave-to
  opacity: 0
.header
	.header_wrapp
		.header_wrapp-item
			.cart
				color: #656363
				.cart_icon
					border: 2px solid #656363
					border-radius: 20px
					padding: 8px 10px
					position: relative
					.count
						position: absolute
						top: -20%
						right: -10%
						background-color: orange
						border-radius: 50%
						color: white
						padding: 3px 8px
			.modal-cart
				background: rgba(0, 0, 0, 0.5)
				position: fixed
			    top: 0
			    left: 0
			    overflow: hidden
				margin: auto
				width: 100%
				display: flex
				justify-content: center
				align-items: center
				.modal-cart-container
					background-color: white
					width: 80%
					max-height: 90%
					overflow-y: scroll
					padding: 20px
					.title
						border-bottom: 1px solid #e5e5e5
						display: flex
						flex-direction: row
						justify-content: space-between
						padding: 10px 0
						h2
							margin: 0
						p 
							margin: 0
						span
							cursor: pointer
					.cart_wrapp-item
						display: flex
						flex-direction: row
						justify-content: space-between
						align-items: center
						border-bottom: 1px solid #e5e5e5
						padding: 10px 0
						img
							height: 50%
							width: 60%
							margin: auto

</style>