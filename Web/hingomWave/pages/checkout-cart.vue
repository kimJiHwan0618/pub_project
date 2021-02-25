<template>
  <div>
    <Header/>
    <main class="sub_main">
      <nuxt-child />
    </main>
    <ServiceWrap />
    <Footer/>
  </div>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'
import ServiceWrap from './layout/service_wrap'

export default {
  name : 'CheckoutCart',
  components: {
    Header,
    Footer,
    ServiceWrap
  }
}
</script>
