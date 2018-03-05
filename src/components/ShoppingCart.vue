<template>
	<div class="shop-cart">
		<div class="container">
			<div class="shop-wrapp">
				<div class="shop-form_wrapp">
					<div class="shop-form_wrapp-form">
						<div>
							<form v-on:submit.prevent id="uploadForm" name="uploadForm" enctype="multipart/form-data">
								<div class="row">
									<div><li>Recipient's phone number</li></div>
									<div><input type="text"  placeholder="Number"></div>
								</div>
								<div class="row">
									<div><li>Receiver name</li></div>
									<div><input type="text" id="name" name="name"  placeholder="Name" required></div>
								</div>
								<div class="row">
									<div><li>Last name of the recipient</li></div>
									<div><input type="text" id="lastname" name="lastname" placeholder="Last name"></div>
								</div>
								<div class="row">
									<div><li>E-mail</li></div>
									<div><input type="email" id="email" name="email" placeholder="Email" required></div>
								</div>
								<button type="submit" value="Upload" 
									:disabled="!products.length"
									@click="checkout(products),decrement" 
									v-on:click="this.uploadData">
									The order is confirmed
								</button>
								<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}</p>
							</form>
						</div>
					</div>
				</div>
				<div class="shop-cart_wrapp">
					<div class="shop-cart_wrapp-item">
						<div class="shop-cart_wrapp-items" v-for="product in products">
							<div>
								<h2>{{ product.title }}</h2>
								<img :src="product.img"/>
							</div>
							<div>	
								{{ product.price | currency }} x {{ product.quantity }}
							</div>
						</div>
						<div style="margin: 0.83em 0">Total: <span style="font-weight: 700">{{ total | currency}}</span></div>
					</div>
				</div>
			</div>
			<div class="gmap-wrapp">
				<gmap-map
					v-bind:title="maptitle"
					:center="{ lat:40.730610, lng:-73.935242 }"
					:zoom="10"
					map-type-id="terrain"
					style="width: 100%; height: 300px">
				</gmap-map>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { CheckCircleIcon, XCircleIcon } from 'vue-feather-icons'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
export default {
	data() {
		return {
			msg: false,
			maptitle: 'We are everywhere)))))))',
			center: {lat: 10.0, lng: 10.0},
	        markers: [{
	          position: {lat: 40.730610, lng: -73.935242}
	        }, {
	          position: {lat: 11.0, lng: 11.0}
	        }]
		}
	},
	computed: {
	    ...mapGetters({
	      products: 'cartProducts',
	      checkoutStatus: 'checkoutStatus',
	      total: 'cartTotalPrice'
	    }),
	    ...mapState([
	    	'count'
	    ]),
	    ...mapMutations([
	    	'decrement'
	    ])
	},
	methods: {
		setCreate() {
			document.cookie = "Hello=World, buy my product"
		},
	    checkout (products) {
	       this.$store.dispatch('checkout', products)
	    },
	    uploadData () {
	    	let s = this;
	    	const data  = new FormData(document.getElementById('uploadForm'));
	    	data.append('name', s.name),
	    	data.append('lastname', s.lastname),
	    	data.append('email', s.email),
	    	axios.post('http://localhost:8080', data, {
	            headers: {
	              'Content-Type': 'multipart/form-data'
	            }
	        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            })
	    }
	},
	components: {
		CheckCircleIcon,
		XCircleIcon 
	}
}
</script>

<style lang="sass">
.shop-cart 
	padding: 40px 0
	border-top: 1px solid #eee
	background-color: #eee
	.shop-wrapp
		display: flex	
		justify-content: space-between
		width: 100%
		.shop-form_wrapp
			width: 70%
			.shop-form_wrapp-form
				background-color: white
				padding: 4.8%
				form 
					display: flex
					flex-direction: column
					justify-content: space-between
					.row
						display: flex
						justify-content: space-between
						margin: 10px 0
						li
							list-style: none
						input
							border: 1px solid #e5e5e5
							border-radius: 5px
							padding: .8rem 1rem
							box-shadow: none
					button 
						border: none
						background-color: #eee
						margin: 10px 0 0 0
						font-weight: 700
						padding: 1.2rem 1rem
						text-transform: uppercase
						width: 100%
						cursor: pointer	
						outline: none
		.shop-cart_wrapp 
			width: 30%
			.shop-cart_wrapp-item
				display: flex
				flex-direction: column
				background-color: white
				padding: 0 10%
				margin-left: 50px
				overflow-y: auto
				.shop-cart_wrapp-items
					display: flex
					flex-direction: column
					width: 100%
					border-bottom: 1px solid #eee
					padding: 10px 0
					h2 
						font-size: 17px
	.gmap-wrapp
		padding: 40px 0 0 0
@media only screen and (max-width: 767px)
	.shop-cart .shop-wrapp
		flex-direction: column
		.shop-form_wrapp
			width: 100%
		.shop-cart_wrapp
			width: 100%
			padding: 20px 0 0 0
			.shop-cart_wrapp-item
				margin: 0
@media only screen and (max-width: 480px)
	.shop-cart .shop-wrapp .shop-form_wrapp .shop-form_wrapp-form form .row 
		flex-direction: column
		align-items: center
		li 
			padding: 10px 0
</style>