<template>
  <header ref="header">
    <div class="header_inner" ref="header">
      <div class="header_top">
        <div class="header_top_inner"> 
          <ul class="sns_wrap">
            <li><a href="https://www.facebook.com/hingomlaos" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
            <li><nuxt-link to="#" title="Service is being prepared"><i class="fab fa-twitter" aria-hidden="true"></i></nuxt-link></li>
            <li><nuxt-link to="#" title="Service is being prepared"><i class="fab fa-instagram" aria-hidden="true"></i></nuxt-link></li>
          </ul>
          <ul class="top_menu">
            <li><nuxt-link to="/kr/login">Login</nuxt-link></li>
            <li><nuxt-link to="/kr/register">Register</nuxt-link></li>
            <li><nuxt-link to="#" title="Service is being prepared">Customer Center</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="header_bottom">
        <div>
          <span class="menu_btn" id="nav-icon3" @click="menuBtn" ref="menuBtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <nuxt-link to="/kr"><img class="logo" src="@/assets/images/logo.png" alt="Logo"></nuxt-link>
        </div>
        <nav class="gnb" ref="gnb">
          <ul>
            <li>
              <nuxt-link class="main_list" to="/kr">HOME</nuxt-link>
              <ul class="sub_menu">
                <li><a href="#">Sun title1-1</a></li>
              </ul>
            </li>
            <li>
              <nuxt-link class="main_list" to="#" title="Service is being prepared.">ABOUT US</nuxt-link>
              <ul class="sub_menu">
                  <li><a href="#">Sun title2-1</a></li>
              </ul>
            </li>
            <li>
              <nuxt-link class="main_list" to="/kr/product-all">PRODUCTS</nuxt-link>
              <ul class="sub_menu">
                <li><a href="#">Sun title3-1</a></li>
              </ul>
            </li>
            <li>
              <nuxt-link class="main_list" to="#" title="Service is being prepared.">DOWNLOAD</nuxt-link>
              <ul class="sub_menu">
                <li><a href="#">Sun title4-1</a></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="#" title="Service is being prepared.">CONTACT</nuxt-link>
              <ul class="sub_menu">
                <li><a href="#">Sun title5-1</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <ul class="icon_wrap">
          <li><nuxt-link to="/kr/my-account"><i class="fas fa-user"></i></nuxt-link></li>
          <li id="ShopList" ref="shopList"
            @mouseover="shopMenuMouseOver"                                
            @mouseout="shopMenuMouseOut"                                    
          >
            <a href="#" onclick="return false"
              @click="shopMenuClick"                              
            >
              <i class="fa fa-shopping-bag"></i>
              <span class="notice_num">{{ shopList.length }}</span>
            </a>
            <ul class="shoplist_wrap">
              <li class="shop_tit">Shopping Bag</li>
              <li class="shop_list">
                <ul id="ShopBasket">
                  <li class="list"
                    v-for="(shopItem,index) in shopList"
                    :key="shopItem.name"
                  >
                    <div class="cart-item-image">
                      <img :src="shopItem.img" alt="">
                    </div>
                    <div class="cart-item-info">
                      <h4>{{ shopItem.name }}</h4>
                      <p class="price"><span>₭</span>{{ shopItem.price }}</p>
                    </div>
                    <div class="cart-item-close">
                      <span
                        @click="deleteShopList(index)"
                      >
                      </span>
                    </div>
                  </li>
                </ul>
                <span class="shopview_btn"><nuxt-link to="/kr/checkout-cart/step1">View Cart</nuxt-link></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- //header -->
</template>

<script>
export default {
  name : 'Header',
  data () {
    return {
      windowResize : 0,
    }
  },
  created () {
    this.windowResize = window.innerWidth
    window.addEventListener('resize',() => {
      this.windowResize = window.innerWidth
      console.log(this.windowResize)
    }) 
  },
  computed : {
    shopList () {
      return this.$store.state.product_detail.shopList
    }
  },
  mounted () {
    console.log(this.shopList)
  },
  methods : {
    menuBtn () {
      this.$refs.menuBtn.classList.toggle('open')
      this.$refs.menuBtn.children[2].classList.toggle('on')
      this.$refs.gnb.classList.toggle('open')
      this.$refs.shopList.classList.remove('on')
    },
    shopMenuClick () {
      this.$refs.menuBtn.classList.remove('open')
      this.$refs.menuBtn.children[2].classList.remove('on')
      this.$refs.gnb.classList.remove('open')
          
      if(this.windowResize < 800){
        this.$refs.shopList.classList.toggle('on')
      }else{
        return false
      }
    },
    shopMenuMouseOver () {
      if(this.windowResize > 800){
        this.$refs.shopList.classList.add('on')
      }else{
        return false
      }
    },
    shopMenuMouseOut () {
      if(this.windowResize > 800){
        this.$refs.shopList.classList.remove('on')
      }else{
        return false
      }
    },
    deleteShopList (index) {
      this.$store.commit('deleteShopList',index)
    }
  }
}
</script>
