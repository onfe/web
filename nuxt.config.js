import Mode from 'frontmatter-markdown-loader/mode'
import posts from './plugins/get-posts.js'

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
    title: 'Onfe',
    titleTemplate: '%s :: Onfe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffde00' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/mixins.scss', '@/assets/scss/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazyload',
    '~/plugins/transitions'
  ],
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
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sitemap',
    'portal-vue/nuxt'
  ],

  // Style functions and mixins that need to be available to all components
  // essentially an @import at the start of the scss for each component.
  styleResources: {
    scss: ['assets/scss/mixins.scss']
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
  sitemap: {
    hostname: 'https://onfe.uk',
    exclude: ['/blog/p'],
    trailingSlash: true
  },
  /*
   ** PWA configuration
   */
  pwa: {
    manifest: {
      theme_color: '#001020'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
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
      })
    }
  },
  generate: {
    routes: posts
  }
}
