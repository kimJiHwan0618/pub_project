<template>
  <div class="product_description">
    <div class="tit_wrap">
      <h3>Product Description</h3>
    </div>
    <div class="product_description_list">
      <div class="list_wrap"
           v-for="subImg in productExplanation.subImg"
           :key="subImg.title"
      >
        <div class="img">
          <img :src="subImg.imgList" alt="">
        </div>
        <dl>
          <dt>Product description title</dt>
          <dd>Product description Product description Product description Product description 
              Product description Product description Product description Product description 
              Product description Product description Product description Product description  
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed : {
    productExplanation () {
      return this.$store.state.product_detail.productExplanation[0]
    }
  }
}
</script>