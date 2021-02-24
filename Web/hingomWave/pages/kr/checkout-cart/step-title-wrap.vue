<template>
  <div class="cart_step_wrap"
       ref="stepScroll" 
  >
    <div>
      <nuxt-link :to="stepTitle.step"
                 class="step_title"
                 v-for="stepTitle in stepTitle"
                 :key="stepTitle.title"
                 ref="titleOn"
      >
        <div class="num">{{ stepTitle.num }}</div>
        <dl>
          <dt>{{ stepTitle.title }}</dt>
          <dd>{{ stepTitle.explanation }}</dd>
        </dl>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name : 'step-title-wrap',
  data () {
    return {
      stepTitle : [
        { title : 'Delivery Options', explanation : 'Lorem ipsum dolor sit amet.', num : '1', step : '/kr/checkout-cart/step1'},
        { title : 'Shipping Address', explanation : 'Vivamus eleifend euismod.', num : '2', step : '/kr/checkout-cart/step2'},
        { title : 'Payment', explanation : 'Aenean ut pretium ipsum.', num : '3', step : '/kr/checkout-cart/step3'},
        { title : 'Complete Payment', explanation : 'Curabitur interdum libero.', num : '4', step : '/kr/checkout-cart/step4'}
      ]
    }
  },
  mounted () {
    let thisStep = location.href.slice(-5)

    if(thisStep === 'step1'){
      this.$refs.titleOn[0].$el.classList.add('on')  
    }else if(thisStep === 'step2'){
      this.$refs.titleOn[1].$el.classList.add('on')
      this.$refs.stepScroll.scrollLeft = this.$refs.titleOn[0].$el.offsetWidth/2
    }else if(thisStep === 'step3'){
      this.$refs.titleOn[2].$el.classList.add('on')
      this.$refs.stepScroll.scrollLeft = this.$refs.titleOn[0].$el.offsetWidth*1.5
    }else if(thisStep === 'step4'){
      this.$refs.titleOn[3].$el.classList.add('on')
      this.$refs.stepScroll.scrollLeft = this.$refs.titleOn[0].$el.offsetWidth*3
    }
  }
}
</script>