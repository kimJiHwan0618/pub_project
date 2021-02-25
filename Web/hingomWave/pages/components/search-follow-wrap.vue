<template>
  <section class="section_width search_follow_wrap">
    <div class="section_wrap">
      <div class="section_inner">
        <div class="search_wrap">
          <dl>
            <dt>LET'S STAY IN TOUCH</dt>
            <dd>Get updates on sales specials and more</dd>
          </dl>
          <div class="search_box">
            <form action="">
              <input type="email" placeholder="Enter Email Address">
              <input type="submit">
            </form>
          </div>
        </div>
        <div class="follow_wrap">
          <dl>
            <dt>FOLLOW US</dt>
            <dd>We want to hear from you!</dd>
          </dl>
          <div class="icon_wrap2">
            <a href="https://www.facebook.com/hingomlaos" target="_blank" class="facebook"><i class="fab fa-facebook"></i></a>
            <nuxt-link to="#" title="Service is being prepared." class="twitter"><i class="fab fa-twitter"></i></nuxt-link>
            <nuxt-link to="#" title="Service is being prepared." class="instargram"><i class="fab fa-instagram"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : 'search-follow-wrap'
}
</script>