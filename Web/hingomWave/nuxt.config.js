export default {
  target : 'static',
  ssr: true,
  router : {
    base : "/project/Web/hingom/"
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "h.WAVE Official Website",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '@/assets/scss/style.scss' }
    ],
    script:[
      { src: 'https://kit.fontawesome.com/ccff4d584f.js'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
     '@/assets/scss/style.scss' 
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
