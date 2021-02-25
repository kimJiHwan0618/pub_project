<template>
  <div class="login_register_body">
    <Header />
    <main class="sub_main">
      <div class="container">
        <div class="user_wrap">
          <h2 class="user_greetings">Welcome to h.WAVE! Please login</h2>
          <form action="">
            <ul class="login_box">
              <li><label for="email">Email Address</label></li>
              <li><input type="email" placeholder="Please enter your address" ref="eamil"></li>
              <li><label for="password">Password</label></li>
              <li><input type="password" placeholder="Please enter your password" ref="password"></li>
              <li><input type="submit" value="Login"></li>
            </ul>
            <ul class="forgot_password">
              <li><nuxt-link to="#">Fotgot Password?</nuxt-link></li>
            </ul>
            <ul class="sns_login_wrap">
              <li><nuxt-link to="#"><i class="fab fa-facebook"></i>facebook</nuxt-link></li>
              <li><nuxt-link to="#"><i class="fab fa-google"></i>google</nuxt-link></li>
            </ul>
          </form>
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
  }
}
</script>