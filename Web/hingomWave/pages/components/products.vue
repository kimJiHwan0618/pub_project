<template>
  <section class="section_width products">
    <div class="section_title_wrap">
      <h1>Products</h1>
      <nuxt-link to="/product-all">SHOW ALL</nuxt-link>
    </div>
    <div class="section_wrap">
      <div class="section_inner">
        <div class="product_wrap1-1">
          <ul class="product_tit">
            <li><span>CATEGORIES</span></li>
            <li v-for="(itemTitle,index) in allproducts.product"
                :key="itemTitle.categories"
                class="tit_txt"
                @click="ProductCategories(index)"
                ref="productCategories"
            >{{ itemTitle.categories }}</li>
          </ul>
        </div>
        <div class="product_wrap1-2"  ref="bigItemWrap">
          <nuxt-link v-for="(mainproduct,index) in allproducts.product"
                     :key="mainproduct.mainItemImg"
                     to="/product-all"
                     class="img"
                     @click.native="goProductAll(index)"
          >
            <img :src="mainproduct.mainItemImg" alt="">
            <div class="text_wrap">
              <h3>{{ mainproduct.categories }}</h3>
              <h4>{{ mainproduct.explanation }}</h4>
            </div>
          </nuxt-link>
        </div>
        <div class="product_wrap2">
          <ul v-for="itembox in allproducts.product"
              :key="itembox.categories"
              class="product_item_wrap"
              ref="smallItemWrap"
          >
            <li v-for="product in itembox.prouducts" 
                :key="product.name"
                id="item"
                class="product_item"
            >
              <nuxt-link to="/product-detail" 
                         @click.native="goProductDetail(product)">
                <span>
                  <span class="sale_mark">{{ product.percent }}% off</span>
                  <img :src="product.img" alt="">
                </span>
                <span>
                  <h3>{{ product.name }}</h3>
                  <p>{{ product.explanation }}</p>
                  <p><span>₭</span><span class="price">{{ product.price }}</span></p>
                  <p><span>₭</span><span class="sale_price">{{ product.sale }}</span></p>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- //Products -->
</template>

<script>

export default {
  name : 'products',
  computed : {
    allproducts () {
      return this.$store.state.allproducts.allproducts
    }
  },
  mounted () {    
    this.$refs.bigItemWrap.children[0].classList.add('on')
    this.$refs.smallItemWrap[0].classList.add('on')
    this.$refs.productCategories[0].classList.add('on')
  },
  methods : {
    ProductCategories (index) {
      let ProductLength = this.$refs.productCategories.length-1

      for(let i=0; i<=ProductLength;i++){
        this.$refs.smallItemWrap[i].classList.remove('on')
        this.$refs.bigItemWrap.children[i].classList.remove('on')
        this.$refs.productCategories[i].classList.remove('on')
      }
      this.$refs.smallItemWrap[index].classList.add('on')
      this.$refs.bigItemWrap.children[index].classList.add('on')
      this.$refs.productCategories[index].classList.add('on')
    },
    goProductDetail (product) {
      this.$store.commit('goProductDetail',product)
    },
    goProductAll (index) {
      this.$store.commit('goProductAll',index)
    }
  }
}
</script>