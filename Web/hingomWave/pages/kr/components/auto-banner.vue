<template>
  <section class="autobanner_wrap" 
           id="window_screen" 
           ref="screenWidth"
  >
    <div class="banner_train" 
         id="bannerTrain" 
         ref="bannerTrain"
    >       
      <article v-for="banner in banners"
               :key="banner.maintext"
               class="banner_wrap"
               ref="bannerWrap"
      >
        <div class="banner_wrap_inner">
          <div class="text_wrap">
            <div class="text_wrap_inner">
              <h1>{{ banner.maintext1}}<br />
                  {{ banner.maintext2 }}
              </h1>
              <ul>
                <li>{{ banner.subtext }}</li>
              </ul>
              <a href="/kr/product-all" class="more_btn">View more</a>
            </div>
            <div class="baanerimage_wrap">
              <img :src="banner.posimg" alt="">
            </div>
            <div class="store-btn-wrap">
              <nuxt-link to="#"><img src="@/assets/images/play-store.png" alt=""></nuxt-link>
              <nuxt-link to="#"><img src="@/assets/images/app-store.png" alt=""></nuxt-link>
            </div>
          </div>
        </div>
      </article>
    </div>
    <!-- //banner_train -->
    <div class="arrow_wrap">
      <span id="prevBtn" class="back arrow" @click="prevBtn"><img src="@/assets/images/back_arrow.png" alt=""></span>
      <span id="nextBtn" class="next arrow" @click="nextBtn"><img src="@/assets/images/next_arrow.png" alt=""></span>
    </div>
  </section>
  <!-- //aubaeer_wrap -->
</template>

<script>
export default {
  name : 'AutoBanner',
  data () {
    return {
      bnnNum : 0,
    }
  },
  computed : {
    banners () {
      return this.$store.state.banners.banners
    }
  },
  methods : {
    nextBtn () {
      let lastNum = this.banners.length-1 
        
      this.bnnNum++;
        
      if(this.bnnNum > lastNum) this.bnnNum = 0
        
      this.$refs.bannerTrain.style.left = -(this.bnnNum*(this.$refs.screenWidth.offsetWidth))+'px'

      if(this.bnnNum == 0){
        this.$refs.bannerWrap[lastNum].classList.remove('on')
      }else{
        this.$refs.bannerWrap[this.bnnNum-1].classList.remove('on')
      }
      this.$refs.bannerWrap[this.bnnNum].classList.add('on')  
    },
    prevBtn () {
      let lastNum = this.banners.length-1 

      this.bnnNum--;

      if(this.bnnNum < 0) this.bnnNum = lastNum
        
      this.$refs.bannerTrain.style.left = -(this.bnnNum*(this.$refs.screenWidth.offsetWidth))+'px'

      if(this.bnnNum == lastNum){
        this.$refs.bannerWrap[0].classList.remove('on')
      }else{
        this.$refs.bannerWrap[this.bnnNum+1].classList.remove('on')
      }
      this.$refs.bannerWrap[this.bnnNum].classList.add('on')   
    }
  },
  mounted () {
    this.$refs.bannerWrap[0].classList.add('on')        
    // setInterval(this.nextBtn,8000) << autoBanner
  }
}
</script>
