<template>
  <div>
    <Header />
      <main class="sub_main">
        <div class="container">
          <ul class='lnb'>
            <li><a href="#">Home</a><span>/</span></li>
            <li><a href="#">Store</a><span>/</span></li>
            <li><a href="#">My Account</a></li>
          </ul>              
          <div class="account_wrap">
            <div class="account_notice">
              <div class="background_box">
                <img src="../../assets/images/banner3.jpg" alt="">
              </div>
              <dl>
                <dt>Your Account</dt>
                <dd>Modify an order, track a shipment, and update your account info.</dd>
                <dd>All you need in one place. All with a few simple clicks.</dd>
              </dl>
            </div>    
            <div class="account_body">
              <div class="account_inner">
                <dl>
                  <dt><i class="fab fa-gitlab fa-fw text-primary"></i>Orders</dt>
                  <dd><a href="#">Check the status of an order</a></dd>
                  <dd><a href="#">Track a shipment</a></dd>
                  <dd><a href="#">Pre-sign for a delivery</a></dd>
                  <dd><a href="#">Cancel items</a></dd>
                  <dd><a href="#">Print an invoice</a></dd>
                  <dd><a href="#">Return items</a></dd>
                  <dd><a href="#">Change shipping or billing info for an order</a></dd>
                  <dd><a href="#">Edit gift messaging or engraving</a></dd>
                  <dd><a href="#">View order history</a></dd>
                </dl>
                <dl>
                  <dt><i class="fa fa-universal-access fa-fw text-primary"></i>Account Settings</dt>
                  <dd><a href="#">Update your email address and password</a></dd>
                  <dd><a href="#">Change your default shipping or billing info</a></dd>
                  <dd><a href="#">Manage email subscriptions</a></dd>
                </dl>
              </div>
              <div class="account_inner">
                <dl>
                  <dt><i class="fab fa-cc-visa fa-fw text-primary"></i>Payments & Financing</dt>
                  <dd><a href="#">Check the balance of a gift card</a></dd>
                  <dd><a href="#">Check the status of a rebate</a></dd>
                </dl>
                <dl>
                  <dt><i class="fab fa-wpforms fa-fw text-primary"></i>Specialists</dt>
                  <dd><a href="#">View your previous activity</a></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'

export default {
  name : 'MyAccount',
  components: {
    Header,
    Footer
  }
}
</script>