// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-8',
        title: 'Whatamelon',
        meta: [
          { name: 'description', content: 'My Azit' }
        ],
      }
    },
    css: [
      '~/assets/css/main.css',
      // '~/assets/css/utilities/text.css'
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: [
      '@nuxt/content'
    ],
})
