(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{181:function(t,e,n){t.exports=n.p+"img/logo.7549bac.png"},185:function(t,e,n){"use strict";n.r(e);var r={name:"Header",data:function(){return{windowResize:0}},created:function(){},computed:{shopList:function(){return this.$store.state.product_detail.shopList}},mounted:function(){console.log(this.shopList)},methods:{menuBtn:function(){this.$refs.menuBtn.classList.toggle("open"),this.$refs.menuBtn.children[2].classList.toggle("on"),this.$refs.gnb.classList.toggle("open"),this.$refs.shopList.classList.remove("on")},shopMenuClick:function(){if(this.$refs.menuBtn.classList.remove("open"),this.$refs.menuBtn.children[2].classList.remove("on"),this.$refs.gnb.classList.remove("open"),!(this.windowResize<800))return!1;this.$refs.shopList.classList.toggle("on")},shopMenuMouseOver:function(){if(!(this.windowResize>800))return!1;this.$refs.shopList.classList.add("on")},shopMenuMouseOut:function(){if(!(this.windowResize>800))return!1;this.$refs.shopList.classList.remove("on")},deleteShopList:function(t){this.$store.commit("deleteShopList",t)}}},l=n(28),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{ref:"header"},[r("div",{ref:"header",staticClass:"header_inner"},[r("div",{staticClass:"header_top"},[r("div",{staticClass:"header_top_inner"},[r("ul",{staticClass:"sns_wrap"},[t._m(0),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[r("i",{staticClass:"fab fa-twitter",attrs:{"aria-hidden":"true"}})])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[r("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),r("ul",{staticClass:"top_menu"},[r("li",[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"#",title:"Service is being prepared"}},[t._v("Customer Center")])],1)])])]),t._v(" "),r("div",{staticClass:"header_bottom"},[r("div",[r("span",{ref:"menuBtn",staticClass:"menu_btn",attrs:{id:"nav-icon3"},on:{click:t.menuBtn}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span"),t._v(" "),r("span")]),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:n(181),alt:"Logo"}})])],1),t._v(" "),r("nav",{ref:"gnb",staticClass:"gnb"},[r("ul",[r("li",[r("nuxt-link",{staticClass:"main_list",attrs:{to:"/"}},[t._v("HOME")]),t._v(" "),t._m(1)],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"main_list",attrs:{to:"#",title:"Service is being prepared."}},[t._v("ABOUT US")]),t._v(" "),t._m(2)],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"main_list",attrs:{to:"/product-all"}},[t._v("PRODUCTS")]),t._v(" "),t._m(3)],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"main_list",attrs:{to:"#",title:"Service is being prepared."}},[t._v("DOWNLOAD")]),t._v(" "),t._m(4)],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"#",title:"Service is being prepared."}},[t._v("CONTACT")]),t._v(" "),t._m(5)],1)])]),t._v(" "),r("ul",{staticClass:"icon_wrap"},[r("li",[r("nuxt-link",{attrs:{to:"/my-account"}},[r("i",{staticClass:"fas fa-user"})])],1),t._v(" "),r("li",{ref:"shopList",attrs:{id:"ShopList"},on:{mouseover:t.shopMenuMouseOver,mouseout:t.shopMenuMouseOut}},[r("a",{attrs:{href:"#",onclick:"return false"},on:{click:t.shopMenuClick}},[r("i",{staticClass:"fa fa-shopping-bag"}),t._v(" "),r("span",{staticClass:"notice_num"},[t._v(t._s(t.shopList.length))])]),t._v(" "),r("ul",{staticClass:"shoplist_wrap"},[r("li",{staticClass:"shop_tit"},[t._v("Shopping Bag")]),t._v(" "),r("li",{staticClass:"shop_list"},[r("ul",{attrs:{id:"ShopBasket"}},t._l(t.shopList,(function(e,n){return r("li",{key:e.name,staticClass:"list"},[r("div",{staticClass:"cart-item-image"},[r("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),r("div",{staticClass:"cart-item-info"},[r("h4",[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"price"},[r("span",[t._v("₭")]),t._v(t._s(e.price))])]),t._v(" "),r("div",{staticClass:"cart-item-close"},[r("span",{on:{click:function(e){return t.deleteShopList(n)}}})])])})),0),t._v(" "),r("span",{staticClass:"shopview_btn"},[r("nuxt-link",{attrs:{to:"/checkout-cart/step1"}},[t._v("View Cart")])],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://www.facebook.com/hingomlaos",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook",attrs:{"aria-hidden":"true"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title1-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title2-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title3-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title4-1")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"sub_menu"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Sun title5-1")])])])}],!1,null,null,null);e.default=component.exports}}]);