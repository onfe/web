import getPosts from './plugins/get-posts.js'
import Mode from 'frontmatter-markdown-loader/mode'

const md = require('markdown-it')({
  html: true,
  typographer: true
}).use(require('markdown-it-highlightjs'), { auto: true })

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Onfe",
    titleTemplate: "%s :: Onfe",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0096ff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/mixins.scss',
    '@/assets/scss/styles.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazyload'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-108088302-3'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // Style functions and mixins that need to be available to all components
  // essentially an @import at the start of the scss for each component.
  styleResources: {
    scss: [
      'assets/scss/mixins.scss'
    ]
  },
  // Optimize images
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    responsive: {
      sizes: [350, 650, 1200],
      // default size if unspecified
      size: 650,
      adapter: require('responsive-loader/jimp')
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
     extend(config, { isDev, isClient }) {
       // Load markdown as Vue components.
       config.module.rules.push({
         test: /\.md$/,
         loader: 'frontmatter-markdown-loader',
         options: {
           mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.BODY],
           markdown: (body) => {
             return md.render(body)
           }
         }
       });
     }
  },
  generate: {
    routes: function() {
      return getPosts.get()
    }
  }
}
