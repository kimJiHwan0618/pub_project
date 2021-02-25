export default{
  state : {
    productExplanation : [{ name : 'POS for Restaurant Product1',
    explanation : 'POS for Restaurant Product text1',
    price: 549.00,
    sale : 649.00,
    img: 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1-1.jpg',
    percent : 30,
    count : 1,
    subImg : [
      { imgList : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1-1.jpg' },    
      { imgList : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1-1/item1-1-2.png' },  
      { imgList : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1-1/item1-1-3.png' },  
      { imgList : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1-1/item1-1-4.png' },  
    ]
  }],
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