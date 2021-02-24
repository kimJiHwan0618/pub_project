<template>
  <div>
    <Header/>
    <main>
      <AutoBanner />
      <KeyFeatures />
      <Products />
      <ServiceWrap />
      <SearchFollowWrap />
    </main>
    <!-- //main -->
    <Footer/>
  </div>
</template>

<script>
import Header from './layout/header'
import Footer from './layout/footer'
import ServiceWrap from './layout/service_wrap'
import AutoBanner from './components/auto-banner'
import KeyFeatures from './components/key-features'
import Products from './components/products'
import SearchFollowWrap from './components/search-follow-wrap'

export default {
  name : 'Index',
  components: {
    Header,
    Footer,
    ServiceWrap,
    AutoBanner,
    KeyFeatures,
    Products,
    SearchFollowWrap
  }
}
</script>
