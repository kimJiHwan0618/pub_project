<template>
  <div ref="scrollMove">
    <Header/>
    <main class="sub_main">
      <div class="container">
        <ul class='lnb'>
          <li><a href="#">Home</a><span>/</span></li>
          <li><a href="#">Products</a><span>/</span></li>
          <li><a href="#">POS Software</a></li>
        </ul>
        <ProductDetailMain />
        <h2 class="otherproducts_tit">You Might Also Like</h2>
        <OtherProducts />
      </div>
      <!-- //container -->
    </main>
    <!-- //main -->
    <Footer/>
  </div>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'
import ProductDetailMain from './components/product-detail-main'
import OtherProducts from './components/other-products'

export default {
  name : 'ProductDetail',
  components : {
    Header,
    Footer,
    ProductDetailMain,
    OtherProducts
  },
  created () {
    this.$nuxt.$on('goProductDetail', (product) => {
      return this.$store.state.product_detail.productExplanation = product
    })
  }
}
</script>
