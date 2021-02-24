<template>
  <div class="product_img">
    <div class="product_thumnail">
      <ul id="ProductThumnail" ref="subImgWrap">
        <li class="thumnail_item"
            v-for="(subImg,index) in productExplanation[0].subImg"
            :key="subImg.imgList"
            @click="thisImg(index)"         
        >
          <span>
            <img :src="subImg.imgList" alt="" ref="subImg">
          </span>
        </li>
      </ul>
    </div>
    <div class="product_main">
      <img :src="productExplanation[0].img" 
           id="mainImg" 
           ref="mainImg"
           alt="" 
      >
    </div>
  </div>
</template>

<script>

export default {
  data () {
  return{
           
    }
  },
  computed : {
    productExplanation () {
      return this.$store.state.product_detail.productExplanation
    }
  },
  mounted () {
    this.$refs.subImgWrap.children[0].classList.add('on')
  },
  methods : {
    thisImg (index) {
      let subImgLength = this.$refs.subImgWrap.children.length-1

      for(let i=0; i<=subImgLength;i++){
        this.$refs.subImgWrap.children[i].classList.remove('on')
      }
      this.$refs.subImgWrap.children[index].classList.add('on')

      let subImgSrc = this.$refs.subImg[index].getAttribute('src')
      this.$refs.mainImg.setAttribute('src',subImgSrc)            
    }
  }
}
</script>