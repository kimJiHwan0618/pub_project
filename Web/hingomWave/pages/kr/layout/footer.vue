<template>
  <footer>
    <div class="footer_inner">
      <ul>
        <li>
          <dl>
            <dt>ABOUT US</dt>
            <dd>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique dolor, ac efficitur velit. Nulla lobortis tempus convallis. Nulla aliquam lectus eu porta pulvinar. Mauris semper justo erat.</li>
                <li>Vestibulum porttitor lorem et vestibulum pharetra. Phasellus sit amet mi congue, hendrerit mi ut, dignissim eros.</li>
              </ul>
            </dd>
          </dl>
        </li>
        <!-- //1 -->
        <li>
          <dl>
            <dt>RELATED LINKS</dt>
            <dd>
              <ul>
                <li><i class="fas fa-arrow-right"></i><nuxt-link to="#" title="Service is being prepared.">About us</nuxt-link></li>
                <li><i class="fas fa-arrow-right"></i><nuxt-link to="#" title="Service is being prepared.">Contact us</nuxt-link></li>
                <li><i class="fas fa-arrow-right"></i><nuxt-link to="#" title="Service is being prepared.">Terms of Use</nuxt-link></li>
                <li><i class="fas fa-arrow-right"></i><nuxt-link to="#" title="Service is being prepared.">Sales & Refund</nuxt-link></li>
                <li><i class="fas fa-arrow-right"></i><nuxt-link to="#" title="Service is being prepared.">Privacy & Policy</nuxt-link></li>
              </ul>
            </dd>
          </dl>
        </li>
        <!-- //2 -->
        <li>
          <dl>
            <dt>PRODUCTS</dt>
            <dd>
              <dl>
                <nuxt-link to="#" title="Service is being prepared.">
                  <dt><img src="@/assets/images/item1.jpg" alt=""></dt>
                  <dd>POS for Restaurant<br />
                    <span class="price"><span>₭</span><span>669.00</span></span>
                  </dd>
                </nuxt-link>
              </dl>
              <dl>
                <nuxt-link to="#" title="Service is being prepared.">
                  <dt><img src="@/assets/images/item2.jpg" alt=""></dt>
                  <dd>POS for Minimart<br />
                    <span class="price"><span>₭</span><span>559.00</span></span>
                  </dd>
                </nuxt-link>
              </dl>
              <dl>
                <nuxt-link to="#" title="Service is being prepared.">
                  <dt><img src="@/assets/images/item3.jpg" alt=""></dt>
                  <dd>POS for Retail<br />
                    <span class="price"><span>₭</span><span>449.00</span></span>
                  </dd>
                </nuxt-link>
              </dl>
            </dd>
          </dl>
        </li>
        <!-- //3 -->
        <li>
          <dl>
            <dt>OUR CONTACT</dt>
            <dd>
              <ul>
                <li>Hingom Corporation<br />
                  Saythani, Vientiane Capital, Lao PDR
                </li>
                <li>Phone: (+856) 20-9966-8844<br />
                  Email: neolaosinfo@hingom.com<br />
                  Skype: neolaosinfo
                </li>
              </ul>
            </dd>
          </dl>
        </li>
        <!-- //4 -->
      </ul>
    </div>
    <div class="copyright_wrap">
      <div class="copyright_inner">
        <p>Copyright ⓒ 2020 h.WAVE. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name : 'Footer'
}
</script>
