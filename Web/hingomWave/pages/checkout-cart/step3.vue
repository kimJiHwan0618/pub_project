<template>
  <div class="container">
    <div class="cart_wrap">
      <form action="">
        <StepTitleWrap stepNum="step3"/>
          <div class="payment_wrap">
            <h1>Choose a payment method</h1>
          </div>
          <div class="cart_wrap_footer">
            <nuxt-link to="step2" class="shopping">BACK</nuxt-link>
            <nuxt-link to="step4" class="checkout">PROCEED</nuxt-link>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import StepTitleWrap from './step-title-wrap'

export default {
  name : 'checkout-cart-step3',
  components : {
    StepTitleWrap
  }
}
</script>