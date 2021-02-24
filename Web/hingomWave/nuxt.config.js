export default {
  mode: 'spa',
  subdirectory: '/',
  /**
   * Headers of the page
   */
  head: {
    title: 'h.WAVE Official Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width-device-width, initial-scale-1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
      { rel: 'stylesheet', href: '@/assets/scss/style.scss' }
    ],
    script: [
      { src: 'https://unpkg.com/ionicons/dist/ionicons.js', body: true},
      { src: 'https://kit.fontawesome.com/ccff4d584f.js'}
    ]
  },

  router: {
    base: '/',
    mode: 'history'
  },

  /**
   * Customize the process-bar color
   */
  loading: { color: '#2F528F', throttle: 200, height: '3px', css: true },

  /**
   * Global CSS
   */
  css: [
    '@/assets/scss/style.scss'
  ],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: false }
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'vue-scrollto/nuxt',
    ['vue-currency-filter/nuxt', [
      { // default name 'currency'
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      },
      { // default name 'lak'
        name: 'lak',
        symbol: '₭',
        thousandsSeparator: ',',
        fractionCount: 0,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      }
    ]]
  ],

  /**
   * Axios module configuration
   */
  axios: {
    baseURL: '/'
  },

  auth: {
    redirect: {
      home: '/',
      callback: '/callback'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' }
        },
        tokenRequired: true,
        tokenType: 'JWT',
        autoFetchUser: false
      },
      facebook: {
        client_id: '1932108973595546',
        userinfo_endpoint: 'https://graph.facebook.com/v3.1/me?fields=about,name,picture{url},email',
        scope: ['public_profile', 'email']
      },
      google: {
        client_id: '396214276651-86vj88bkeidjdlkgv49nip3lf1bftifq.apps.googleusercontent.com'
      }
    }
  },

  generate: {
    fallback: true
  },

  /**
   * Build configuration
   */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /**
     * Extend webpack configuration
     */
    extend (config, ct) {
      if (ct) {
        config.devtool = '#source-map'
      }
    }
  }
}
