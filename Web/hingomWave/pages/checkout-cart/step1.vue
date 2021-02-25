<template>
  <div class='container'>
    <div class="cart_wrap">
      <form action="">
        <StepTitleWrap/>
        <div class="cart_table_wrap">
          <table>
            <thead ref="tableHead">
              <tr>
                <th>Product Name</th>
                <th class="text_center">Price</th>
                <th class="text_center">Quantity</th>
                <th class="text_center">Total</th>
              </tr>
            </thead>
            <tbody>
              
              <tr class="list"
                  v-for="(shopList,index) in shopList"
                  :key="shopList.name"
              >
                <td>
                  <div class="product_img">
                    <img :src="shopList.img" alt="">
                  </div>
                  <dl>
                    <dt>{{ shopList.name }}</dt>
                    <dd>{{ shopList.explanation }}</dd>
                  </dl>
                </td>
                <td class="text_center">
                  <span>₭</span><span class="price">{{ shopList.price }}</span>
                </td>
                <td class="text_center">
                  <div class="cart-qty-input">
                    <input type="button" 
                           title="minus"
                           @click="minusBtn(shopList,index)"
                    >
                    <input type="number" v-model="shopList.count">
                    <input type="button"
                             title="plus"
                             @click="plusBtn(shopList,index)"
                    >
                  </div>
                  <div>
                    <p class="input_notice">1 to max order</p>
                  </div>
                </td>
                <td class="text_center">
                  <span>₭</span><span class="price">{{ itemPrice }}</span>
                </td>
              </tr>

              <tr ref="priceTotal">
                <td colspan="4">
                  <div class="summary-container">
                    <dl>
                      <dt>Cart Subtotal</dt>
                      <dd><span>₭</span><span class="price">999.00</span></dd>
                    </dl>
                    <dl>
                      <dt>Free Shipping</dt>
                      <dd><span>₭</span><span class="price">0.00</span></dd>
                    </dl>
                    <dl>
                      <dt>Total</dt>
                      <dd><span>₭</span><span class="price">999.99</span></dd>
                    </dl>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart_wrap_footer">
          <nuxt-link to="../product-detail" class="shopping">CONTINUE SHOPPING</nuxt-link>
          <nuxt-link to="step2" class="checkout">CHECKOUT</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import StepTitleWrap from './step-title-wrap' 

export default {
  name : 'checkout-cart-step1',
  components : {
    StepTitleWrap
  },
  data () {
    return {
      itemPrice : 0
    }
  },
  computed : {
    shopList () {
      return this.$store.state.product_detail.shopList
    }
  },
  updated () {
    if(this.$store.state.product_detail.shopList.length === 0){
      this.$refs.priceTotal.style = 'display:none'  
      this.$refs.tableHead.style = 'display:none'  
    }
  },
  mounted () {
    if(this.$store.state.product_detail.shopList.length === 0){
      this.$refs.priceTotal.style = 'display:none'  
      this.$refs.tableHead.style = 'display:none'  
    }
  },
  methods : {
    minusBtn (shopList,index) {
      this.$store.commit('minusBtn',index)
    },
    plusBtn (shopList,index) {
      this.$store.commit('plusBtn',index)
    }
  }
}
</script>