<template>
  <div id="app" @scroll="handleScroll">
    <Navigation/>
    <div class="header" :class="scrolled && styles">
      <div class="container">
         <div class="header_wrapp">
            <div class="header_wrapp-item">
               <router-link to="/"><div class="logo">La Books</div></router-link>
               <div class="navigation">
                  <nav>
                      <li><router-link to="/">Shop</router-link></li>
                      <li><router-link to="/About">About</router-link></li>
                      <li><router-link to="/Blog">Blog</router-link></li>
                      <li><router-link to="/Support">Support</router-link></li>
                  </nav>
               </div>
            </div>
            <div class="mob-icon">
              <div class="header_wrapp-item" @click="openclose = !openclose" v-on:click="mobileMenu = !mobileMenu">
                <menu-icon v-if="openclose"  class="custom-class mobile-icon" style="cursor: pointer;"></menu-icon>
                <x-icon v-else="openclose" class="custom-class mobile-icon" style="cursor: pointer;"></x-icon>
              </div>
            </div>
            <cart/>
         </div>
         <div class="header_mobile_wrapp" v-show="mobileMenu">
           <div class="header_mobile_wrapp-item">
            <nav>
              <ul>
                <li><router-link to="/">Shop</router-link></li>
                <li><router-link to="/About"><a href="#">About</a></router-link></li>
                <li><router-link to="/Blog">Blog</router-link></li>
                <li><router-link to="/Support"><a href="#">Support</a></router-link></li>
              </ul>
            </nav>
           </div>
         </div>
      </div>
    </div>
    <transition name="animaterouter" mode="out-in">
      <router-view/>
    </transition>
    <undeground/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Cart from './components/cart.vue'
import undeground from './components/undeground.vue'
import { mapGetters, mapActions } from 'vuex'
import { ChevronRightIcon, ShoppingCartIcon, MenuIcon, XIcon } from 'vue-feather-icons'
export default {
  name: 'App',
  data () {
      return {
        mobileMenu: false,
        openclose: true,
        scrolled: false,
        styles: {
          border: 'border'
        } 
      }
  },
  components: {
    Navigation,
    ShoppingCartIcon,
    XIcon,
    ChevronRightIcon,
    MenuIcon,
    Cart,
    undeground,
    XIcon
  },
  methods: {
    handleScroll: function() {
      this.scrolled = window.scrollY >= 25
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700')
$default-color: #eee
body
  font-family: 'Lato', sans-serif
  margin: 0
  padding: 0
.animaterouter-enter-active, .animaterouter-leave-active
  transition: opacity .5s
.animaterouter-enter, .animaterouter-leave-to
  opacity: 0
#app 
  color: black
  .border
    border-bottom: 1px solid $default-color
  .header
    position: sticky
    top: 0
    width: 100%
    background-color: white
    padding: 30px 0
    z-index: 30
    .header_wrapp
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      .header_wrapp-item
        position: relative
        .logo
          color: #656363
          text-transform: uppercase
          font-size: 20px
          font-weight: 600
          float: left
          border-right: 1px solid $default-color
          padding-right: 20px
        .navigation
          float: left
          nav
            ul
              margin: 0
            li
              list-style: none
              display: inline
              padding-left: 15px
            a 
              color: gray
              text-decoration: none
              font-size: 16px
              transition: .4s
              outline: none
              &:hover
                color: black
        .cart
          color: #656363
          .cart_icon
            border: 2px solid #656363
            border-radius: 20px
            padding: 8px 10px
        .modal-cart
          background: rgba(0, 0, 0, 0.5)
          position: fixed
          top: 0
          left: 0
          overflow: hidden
          margin: auto
          width: 100%
          height: 100%
          display: flex
          justify-content: center
          align-items: center
          overflow: auto
          .modal-cart-container
            background-color: white
            width: 80%
            padding: 20px
            .title
              border-bottom: 1px solid $default-color
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
              border-bottom: 1px solid $default-color
              padding: 10px 0
              img
                height: 50%
                width: 60%
                margin: auto
      .mob-icon
        display: none
    .header_mobile_wrapp
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      border-left: 1px solid $default-color
      border-right: 1px solid $default-color
      border-bottom: 1px solid $default-color
      .header_mobile_wrapp-item
        padding: 10px 0
        nav 
          ul
            margin: 0
            padding: 0
            li
              list-style: none
              padding: 5px 0
              a 
                color: gray
                text-decoration: none
                transition: .4s
                outline: none
                &:hover 
                  color: black
.container 
  margin-right: auto
  margin-left: auto
  padding-right: 15px
  padding-left: 15px
@media (min-width: 576px) 
  .container 
    max-width: 540px
@media (min-width: 768px) 
  .container 
    max-width: 720px
@media (min-width: 992px) 
  .container 
    max-width: 960px
@media (min-width: 1200px) 
  .container 
    max-width: 1070px
@media (max-width: 1200px)
   #app._fixed
    background-color: white
    position: fixed
    top: 0
    left: 0
    width: 100%
@media only screen and (max-width: 767px)
  #app .header .header_wrapp
    border-top: 1px solid $default-color
    border-bottom: 1px solid $default-color
    padding: 10px 0
  #app .header .header_wrapp .header_wrapp-item .navigation
    display: none
  #app .header .header_wrapp .mob-icon
    display: block
  #app .header .header_wrapp .header_wrapp-item .logo 
    font-size: 16px
    float: none
    border-right: none
    padding-right: 0
</style> 
