import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import banners from './modules/banners'
import allproducts from './modules/allproducts'
import product_detail from './modules/product-detail'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      banners,
      allproducts,
      product_detail
    }
  })
}

export default store
