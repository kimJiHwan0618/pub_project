<template>
  <div class="container">
    <div class="cart_wrap">
      <form action="">   
        <StepTitleWrap stepNum="step2"/>
        <div class="form_list_wrap">
          <div class="form_wrap_inner">
            <dl class="form_list">
              <dt><label for="">First Name</label><span> *</span></dt>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">Last Name</label><span> *</span></dt>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">Company Name (optional)</label></dt>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">Area Code</label><span> *</span></dt>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">Primary Phone</label><span> *</span></dt>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">Street Address</label><span> *</span></dt>
              <dd><input type="text"></dd>
              <dd><input type="text"></dd>
            </dl>
            <dl class="form_list">
              <dt><label for="">ZIP Code</label><span> *</span></dt>
              <dd><input type="text"></dd>
              <p class="zidcode_notice">Enter ZIP for City and State ZIP Code</p>
            </dl>
            <dl class="form_list">
              <dt><label for="">&nbsp;</label></dt>
              <dd>
                <input type="checkbox">
                <p class="address_notice">This is a business address</p>
                <a href="#" title="This helps us choose the best shipping method for you. Business shipments are normally delivered on weekdays by 5:00 p.m. local time. Residential shipments are normally delivered Monday - Saturday by 8:00 p.m. local time.">?</a>
              </dd>
            </dl>
          </div>
          <div class="shipping_policy">
            <dl>
              <dt>Shipping Policy</dt>
              <dd><i class="fa fa-circle" aria-hidden="true"></i>Signature may be required for delivery</dd>
              <dd><i class="fa fa-circle" aria-hidden="true"></i>We do not ship to P.O. boxes</dd>
              <dd><i class="fa fa-circle" aria-hidden="true"></i>Delivery estimates below include item preparation and shipping time</dd>
              <dd><i class="fa fa-circle" aria-hidden="true"></i>We do not ship directly to APO/FPO addresses.</dd>
            </dl>
          </div>
        </div>
        <div class="cart_wrap_footer">
          <nuxt-link to="step1" class="shopping">BACK</nuxt-link>
          <nuxt-link to="step3" class="checkout">CONTINUE</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import StepTitleWrap from './step-title-wrap'

export default {
  name : 'checkout-cart-step2',
  components : {
    StepTitleWrap
  }
}
</script>