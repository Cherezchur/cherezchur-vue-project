export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  // devServerHandlers: [],
  app: {
    head: {
      // title: 'vue-cherezchur',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  }

  // // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   '~assets/scss/main.scss',
  //   '~assets/scss/_font.scss',
  //   '~assets/scss/_grid.scss',
  //   '~assets/scss/variables.scss',
  //   '~assets/scss/mixin.scss',
  // ],

  // // styleResources: {
  // //   scss: [
      
  // //   ]
  // // },  

  // // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  // ],

  // // Auto import components: https://go.nuxtjs.dev/config-components
  // components: [
  //   '~/components',
  // ],

  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // // buildModules: [
  // //   '@nuxtjs/svg'
  // // ],

  // // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   '@nuxtjs/style-resources',
  // ],

  // // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   transpile: [
  //     "vee-validate/dist/rules"
  //   ],
  //   /*
  //     ** You can extend webpack config here
  //     */
  //   // extend(config, ctx) {
  //   //   // ...
  //   // }
  // }
})
