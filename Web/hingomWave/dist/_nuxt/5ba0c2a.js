(window.webpackJsonp=window.webpackJsonp||[]).push([[4,20,21,22],{216:function(t,e,r){t.exports=r.p+"img/logo.7549bac.png"},217:function(t,e,r){t.exports=r.p+"img/item1.bd26bed.jpg"},218:function(t,e,r){t.exports=r.p+"img/item2.cf8c795.jpg"},219:function(t,e,r){t.exports=r.p+"img/item3.b7b72d3.jpg"},220:function(t,e,r){"use strict";r.r(e);var n={name:"Header",data:function(){return{windowResize:0}},created:function(){var t=this;this.windowResize=window.innerWidth,window.addEventListener("resize",(function(){t.windowResize=window.innerWidth,console.log(t.windowResize)}))},computed:{shopList:function(){return this.$store.state.product_detail.shopList}},mounted:function(){console.log(this.shopList)},methods:{menuBtn:function(){this.$refs.menuBtn.classList.toggle("open"),this.$refs.menuBtn.children[2].classList.toggle("on"),this.$refs.gnb.classList.toggle("open"),this.$refs.shopList.classList.remove("on")},shopMenuClick:function(){if(this.$refs.menuBtn.classList.remove("open"),this.$refs.menuBtn.children[2].classList.remove("on"),this.$refs.gnb.classList.remove("open"),!(this.windowResize<800))return!1;this.$refs.shopList.classList.toggle("on")},shopMenuMouseOver:function(){if(!(this.windowResize>800))return!1;this.$refs.shopList.classList.add("on")},shopMenuMouseOut:function(){if(!(this.windowResize>800))return!1;this.$refs.shopList.classList.remove("on")},deleteShopList:function(t){this.$store.commit("deleteShopList",t)}}},l=r(37),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"header"},[n("div",{ref:"header",staticClass:"header_inner"},[n("div",{staticClass:"header_top"},[n("div",{staticClass:"header_top_inner"},[n("ul",{staticClass:"sns_wrap"},[t._m(0),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[n("i",{staticClass:"fab fa-twitter",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[n("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),n("ul",{staticClass:"top_menu"},[n("li",[n("nuxt-link",{attrs:{to:"/kr/login"}},[t._v("Login")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/kr/register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[t._v("Customer Center")])],1)])])]),t._v(" "),n("div",{staticClass:"header_bottom"},[n("div",[n("span",{ref:"menuBtn",staticClass:"menu_btn",attrs:{id:"nav-icon3"},on:{click:t.menuBtn}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("nuxt-link",{attrs:{to:"/kr"}},[n("img",{staticClass:"logo",attrs:{src:r(216),alt:"Logo"}})])],1),t._v(" "),n("nav",{ref:"gnb",staticClass:"gnb"},[n("ul",[n("li",[n("nuxt-link",{staticClass:"main_list",attrs:{to:"/kr"}},[t._v("HOME")]),t._v(" "),t._m(1)],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"main_list",attrs:{to:"#",title:"Service is being prepared."}},[t._v("ABOUT US")]),t._v(" "),t._m(2)],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"main_list",attrs:{to:"/kr/product-all"}},[t._v("PRODUCTS")]),t._v(" "),t._m(3)],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"main_list",attrs:{to:"#",title:"Service is being prepared."}},[t._v("DOWNLOAD")]),t._v(" "),t._m(4)],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("CONTACT")]),t._v(" "),t._m(5)],1)])]),t._v(" "),n("ul",{staticClass:"icon_wrap"},[n("li",[n("nuxt-link",{attrs:{to:"/kr/my-account"}},[n("i",{staticClass:"fas fa-user"})])],1),t._v(" "),n("li",{ref:"shopList",attrs:{id:"ShopList"},on:{mouseover:t.shopMenuMouseOver,mouseout:t.shopMenuMouseOut}},[n("a",{attrs:{href:"#",onclick:"return false"},on:{click:t.shopMenuClick}},[n("i",{staticClass:"fa fa-shopping-bag"}),t._v(" "),n("span",{staticClass:"notice_num"},[t._v(t._s(t.shopList.length))])]),t._v(" "),n("ul",{staticClass:"shoplist_wrap"},[n("li",{staticClass:"shop_tit"},[t._v("Shopping Bag")]),t._v(" "),n("li",{staticClass:"shop_list"},[n("ul",{attrs:{id:"ShopBasket"}},t._l(t.shopList,(function(e,r){return n("li",{key:e.name,staticClass:"list"},[n("div",{staticClass:"cart-item-image"},[n("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),n("div",{staticClass:"cart-item-info"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"price"},[n("span",[t._v("₭")]),t._v(t._s(e.price))])]),t._v(" "),n("div",{staticClass:"cart-item-close"},[n("span",{on:{click:function(e){return t.deleteShopList(r)}}})])])})),0),t._v(" "),n("span",{staticClass:"shopview_btn"},[n("nuxt-link",{attrs:{to:"/kr/checkout-cart/step1"}},[t._v("View Cart")])],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://www.facebook.com/hingomlaos",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook",attrs:{"aria-hidden":"true"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title1-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title2-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title3-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title4-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title5-1")])])])}],!1,null,null,null);e.default=component.exports},221:function(t,e,r){"use strict";r.r(e);var n={name:"Footer"},l=r(37),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer_inner"},[n("ul",[t._m(0),t._v(" "),n("li",[n("dl",[n("dt",[t._v("RELATED LINKS")]),t._v(" "),n("dd",[n("ul",[n("li",[n("i",{staticClass:"fas fa-arrow-right"}),n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("About us")])],1),t._v(" "),n("li",[n("i",{staticClass:"fas fa-arrow-right"}),n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("Contact us")])],1),t._v(" "),n("li",[n("i",{staticClass:"fas fa-arrow-right"}),n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("Terms of Use")])],1),t._v(" "),n("li",[n("i",{staticClass:"fas fa-arrow-right"}),n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("Sales & Refund")])],1),t._v(" "),n("li",[n("i",{staticClass:"fas fa-arrow-right"}),n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("Privacy & Policy")])],1)])])])]),t._v(" "),n("li",[n("dl",[n("dt",[t._v("PRODUCTS")]),t._v(" "),n("dd",[n("dl",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[n("dt",[n("img",{attrs:{src:r(217),alt:""}})]),t._v(" "),n("dd",[t._v("POS for Restaurant"),n("br"),t._v(" "),n("span",{staticClass:"price"},[n("span",[t._v("₭")]),n("span",[t._v("669.00")])])])])],1),t._v(" "),n("dl",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[n("dt",[n("img",{attrs:{src:r(218),alt:""}})]),t._v(" "),n("dd",[t._v("POS for Minimart"),n("br"),t._v(" "),n("span",{staticClass:"price"},[n("span",[t._v("₭")]),n("span",[t._v("559.00")])])])])],1),t._v(" "),n("dl",[n("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[n("dt",[n("img",{attrs:{src:r(219),alt:""}})]),t._v(" "),n("dd",[t._v("POS for Retail"),n("br"),t._v(" "),n("span",{staticClass:"price"},[n("span",[t._v("₭")]),n("span",[t._v("449.00")])])])])],1)])])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("dl",[e("dt",[this._v("ABOUT US")]),this._v(" "),e("dd",[e("ul",[e("li",[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique dolor, ac efficitur velit. Nulla lobortis tempus convallis. Nulla aliquam lectus eu porta pulvinar. Mauris semper justo erat.")]),this._v(" "),e("li",[this._v("Vestibulum porttitor lorem et vestibulum pharetra. Phasellus sit amet mi congue, hendrerit mi ut, dignissim eros.")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("dl",[r("dt",[t._v("OUR CONTACT")]),t._v(" "),r("dd",[r("ul",[r("li",[t._v("Hingom Corporation"),r("br"),t._v("\n                Saythani, Vientiane Capital, Lao PDR\n              ")]),t._v(" "),r("li",[t._v("Phone: (+856) 20-9966-8844"),r("br"),t._v("\n                Email: neolaosinfo@hingom.com"),r("br"),t._v("\n                Skype: neolaosinfo\n              ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright_wrap"},[e("div",{staticClass:"copyright_inner"},[e("p",[this._v("Copyright ⓒ 2020 h.WAVE. All rights reserved.")])])])}],!1,null,null,null);e.default=component.exports},222:function(t,e,r){"use strict";r.r(e);var n={name:"service_wrap"},l=r(37),component=Object(l.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section_width service_wrap"},[r("div",{staticClass:"section_inner"},[r("div",{staticClass:"section_wrap"},[r("ul",[r("li",[r("i",{staticClass:"fas fa-truck"}),t._v(" "),r("dl",[r("dt",[t._v("Free Delivery and Installation")]),t._v(" "),r("dd",[t._v("We delivery and install our POS system for free when you complete order them. We provide.")])])]),t._v(" "),r("li",[r("i",{staticClass:"fas fa-umbrella"}),t._v(" "),r("dl",[r("dt",[t._v("1 Year Warranty for the Hardware")]),t._v(" "),r("dd",[t._v("We provide 1-year warranty for the POS Hardware The customer can receive after-sales service during warranty period.")])])]),t._v(" "),r("li",[r("i",{staticClass:"fas fa-wrench"}),t._v(" "),r("dl",[r("dt",[t._v("Stay Updated")]),t._v(" "),r("dd",[t._v("The POS software always will be updated by OTA (Over-the-air).")])])])])])])])}],!1,null,null,null);e.default=component.exports},240:function(t,e,r){"use strict";r.r(e);var header=r(220),footer=r(221),n=r(222),l={name:"CheckoutCart",components:{Header:header.default,Footer:footer.default,ServiceWrap:n.default}},o=r(37),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("main",{staticClass:"sub_main"},[e("nuxt-child")],1),this._v(" "),e("ServiceWrap"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=5ba0c2a.js.map