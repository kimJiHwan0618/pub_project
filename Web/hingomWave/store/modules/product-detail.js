export default{
  state : {
    productExplanation : [],
    shopList : new Array
  },
  mutations : {
    addShopList (state,productExplanation) {
      state.shopList.push(productExplanation)
      console.log(state.shopList)
    },
    deleteShopList (state,index) {
      state.shopList.splice(index,1)
    },
    goProductDetail (state,product) {
      state.productExplanation.push(product)
      if(state.productExplanation.length > 1){
        state.productExplanation.shift() 
      }
    },
    plusBtn (shopList,index) {
      shopList.shopList[index].count ++
    },
    minusBtn (shopList,index) {
      shopList.shopList[index].count --
    },
    goProductAll (state,index) {
      state.pageIndex = index
    }
  }
}