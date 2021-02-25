<template>
  <section class="section_width key_features">
    <div class="section_title_wrap">
      <h1>Key Features</h1>
      <a href="#">SHOW ALL</a>
    </div>
    <div class="section_wrap">
      <div class="section_inner">
        <article v-for="item in key_features"
                 :key="item.title"
        >
          <div class="txt_wrap">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <a href="#">View More</a>
          </div>
          <div class="image_box">
            <img :src="item.img" alt="">
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- //첫번째 섹션 -->
</template>

<script>
export default {
  name : 'key-features',
  data () {
    return{
      key_features : [
        { title : 'POS for Restaurant', text : 'Easy to use Full features to manage restaurant', img : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item1/item1.png'},
        { title : 'POS for Minimart', text : 'Inventory management Full features to manage restaurant', img : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item2/item2.png'},
        { title : 'h.STORE', text : 'Realtime sales monitoring Sales statistics for owner', img : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item3/item3.jpg'},
        { title : 'h.ORDER', text : 'Order all menus remotely Synchronize all order between apps', img : 'https://kimjihwan0618.github.io/project/Web/h.wave/item/item4/item4.png'}
      ]
    }
  }
}
</script>