<template>
  <div class="container">
    <div class="cart_wrap">
      <form action="">              
        <StepTitleWrap stepNum="step4"/>
        <div class="complete_wrap">
          <h1>Thank you!<br />
            <small>Your Payment has been successfully processed with the following details.</small>
          </h1>
          <div class="complete_table">
            <dl>
              <dt>Transaction Status</dt>
              <dd>Success</dd>
            </dl>
            <dl>
              <dt>Transaction Reference No.</dt>
              <dd>REF000001</dd>
            </dl>
            <dl>
              <dt>Bank Authorised Code</dt>
              <dd>AUTH000001</dd>
            </dl>
            <dl>
              <dt>Transaction Date and Time</dt>
              <dd>05 APR 2016 07:30PM</dd>
            </dl>
            <dl class="product_img">
              <dt>Orders</dt>
              <dd class="product_img_wrap">
                <ul>
                  <li class="img_box"><img src="@/assets/images/Product_01_01.png" alt=""></li>
                  <li class="txt_box">
                    <dl>
                      <dt>iPhone 6s Plus 16GB (Silver)</dt>
                      <dd>Delivers Tue 26/04/2016 - Free</dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>Payment Amount (RM)</dt>
              <dd><span>₭</span><span class="price">999.00</span></dd>
            </dl>
        </div>
        <p class="complete_notice">Should you require any assistance, you can get in touch with Support Team at (123) 456-7890</p>
        </div>
        <div class="cart_wrap_footer complete_footer">
          <a href="#" class="shopping">MANAGE ORDERS</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import StepTitleWrap from './step-title-wrap'

export default {
  name : 'checkout-cart-step4',
  components : {
    StepTitleWrap
  }
}
</script>