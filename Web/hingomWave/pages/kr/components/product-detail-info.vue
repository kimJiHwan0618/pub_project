<template>
  <div class="product_info">
    <div class="product_info_header">
      <h1>
        <span class="sale_mark">{{ productExplanation.percent }}% off</span>
        {{ productExplanation.name }}
      </h1>
      <ul class="product_category">
        <li><a href="#">iPhone</a><span>/</span></li>
        <li><a href="#">mobile phone</a><span>/</span></li>
        <li><a href="#">electronics</a><span>/</span></li>
        <li><a href="#">iPhone</a></li>
      </ul>
    </div>
    <div class="product_warranty">
      <ul>
        <li>
          <strong>1 Year</strong> Local Manufacturer Warranty
        </li>
        <li>Availability: In stock</li>
      </ul>
    </div>
    <ul class="productinfo_wrap">
      <li><i class="fa fa-circle"></i>item4 info1 info1 info1 info1 info1</li>
      <li><i class="fa fa-circle"></i>item4 info2 info2 info2 info2 info2</li>
      <li><i class="fa fa-circle"></i>item4 info3 info3 info3 info3 info3</li>
      <li><i class="fa fa-circle"></i>item4 info4 info4 info4 info4 info4</li>
      <li><i class="fa fa-circle"></i>item4 info5 info5 info5 info5 info5</li>
      <li><i class="fa fa-circle"></i>item4 info6 info6 info6 info6 info6</li>
    </ul>
    <div class="product_social">
      <ul>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
        <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
        <li><a href="#"><i class="fab fa-tumblr"></i></a></li>
      </ul>
    </div>
    <div class="product_purchase">
      <div>
        <p class="sale_price_txt"><span>₭</span><span class="sale_price">{{ productExplanation.sale }}</span></p>
        <p class="price_txt"><span>₭</span><span class="price">{{ productExplanation.price }}</span></p>
      </div>
      <nuxt-link to="/kr/checkout-cart/step1"
                 @click.native="addToCart"
      >ADD TO CART
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed : {
    productExplanation () {
      return this.$store.state.product_detail.productExplanation[0]
    }
  },
  mounted () {
    console.log(this.productExplanation)
  },
  methods : {
    addToCart () {
      this.$store.commit('addShopList',this.productExplanation)
    }
  }
}
</script>