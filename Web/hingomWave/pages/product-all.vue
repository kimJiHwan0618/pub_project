<template>
  <div>
    <Header />
    <main class="sub_main">
      <div class="procut_title_wrap">
        <div>
          <h2 ref="pageTitle">POS for Restaurant</h2>
          <p>ທ່ານສາມາດຊື້ Software ແລະ ອຸປະກອນອື່ນໆ ສໍາຫຼັບການບໍລິຫານຈັດການລະບົບ POS ໄດ້ແລ້ວ ທີ່ຮ້ານຄ້າອອນໄລນ໌ຂອງພວກເຮົາ</p>
        </div>
        <img src="https://kimjihwan0618.github.io/project/Web/h.wave/item1.jpg" 
             alt=""
             ref="backgroundImg"
        >
      </div>
      <ul class="product_tab_title">
        <li v-for="(itemTitle,index) in allproducts.product"
            :key="itemTitle.categories"
            ref="title"
            @click="clickTitle(index)"
        >
          <span>{{ itemTitle.categories }}</span>
        </li>
      </ul>
      <div class="container">
        <div class="product_all_wrap">
          <ul v-for="itembox in allproducts.product"
              :key="itembox.categories"
              ref="productWrap"
          >
            <li v-for="product in itembox.prouducts" 
                :key="product.name"
            >
              <nuxt-link to="/product-detail"
                         @click.native="goProductDetail(product)"
              >
                <span>
                  <img :src="product.img"
                       alt="">
                  <span class="sale"><span>{{ product.percent }}</span>% off</span>
                </span>
                <ul>
                  <li>{{ product.name }}</li>
                  <li>{{ product.explanation }}</li>
                  <li class="price">₭<span></span>{{ product.price }}</li>
                  <li class="sale">₭<span></span>{{ product.sale }}</li>
                </ul>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'
import ServiceWrap from './layout/service_wrap'

export default {
  components : {
    Header,
    Footer,
    ServiceWrap
  },
  computed : {
    allproducts () {
      return this.$store.state.allproducts.allproducts
    },
    goProductAll () {
      return this.$store.state.product_detail.pageIndex
    }
  },
  mounted () {
    let tabIndex = this.$store.state.product_detail.pageIndex

    if(tabIndex === 0){
      this.$refs.title[0].classList.add('on')
      this.$refs.productWrap[0].classList.add('on')
      this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item1.png'
      this.$refs.pageTitle.innerHTML ='POS for Restaurant'
    }else if(tabIndex === 1){
      this.$refs.title[1].classList.add('on')
      this.$refs.productWrap[1].classList.add('on')
      this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item2.png'
      this.$refs.pageTitle.innerHTML ='POS for Minimart'
    }else if(tabIndex === 2){
      this.$refs.title[2].classList.add('on')
      this.$refs.productWrap[2].classList.add('on')
      this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item3.jpg'
      this.$refs.pageTitle.innerHTML ='POS for h.STORE'
    }else if(tabIndex === 3){
      this.$refs.title[3].classList.add('on')
      this.$refs.productWrap[3].classList.add('on')
      this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item4/item4.png'
      this.$refs.pageTitle.innerHTML ='POS for h.ORDER'
    }else if(tabIndex === undefined){
      this.$refs.title[0].classList.add('on')
      this.$refs.productWrap[0].classList.add('on')
      this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item1.jpg'
      this.$refs.pageTitle.innerHTML ='POS for Restaurant'
    }
    console.log(tabIndex)
  },
  methods : {
    clickTitle (index) {
      let ProductLength = this.$refs.title.length-1

      for(let i=0; i<=ProductLength;i++){
        this.$refs.title[i].classList.remove('on')
        this.$refs.productWrap[i].classList.remove('on')
      }
      this.$refs.title[index].classList.add('on')
      this.$refs.productWrap[index].classList.add('on')
      
      if(index === 0){
        this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item1.png'
        this.$refs.pageTitle.innerHTML ='POS for Restaurant'
      }else if(index === 1){
        this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item2.png'
        this.$refs.pageTitle.innerHTML ='POS for Minimart'
      }else if(index === 2){
        this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item3.jpg'
        this.$refs.pageTitle.innerHTML ='POS for h.STORE'
      }else if(index === 3){
        this.$refs.backgroundImg.src = 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item4/item4.png'
        this.$refs.pageTitle.innerHTML ='POS for h.ORDER'
      }
    },
    goProductDetail (product) {
      this.$store.commit('goProductDetail',product)
    }
  }
}
</script>