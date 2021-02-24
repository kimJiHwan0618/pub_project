<template>
  <div class="product_detail">
    <ProductDetailImg />
    <ProductDetailInfo />
    <ProductDetailDescription />
  </div>
</template>

<script>
import ProductDetailDescription from './product-detail-description'
import ProductDetailImg from './product-detail-img'
import ProductDetailInfo from './product-detail-info'

export default {
  components : {
    ProductDetailDescription,
    ProductDetailInfo,
    ProductDetailImg
  }
}
</script>