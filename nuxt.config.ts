// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-8',
        title: 'Whatamelon',
        meta: [
          { name: 'description', content: 'My Azit' }
        ],
        link:[
          {
            href:'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
            rel:'stylesheet'
          },
          {
            href:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css',
            rel:'stylesheet'
          }
        ]
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
    build: { 
      transpile: [
        '@headlessui/vue',
        '@headlessui/tailwindcss'
      ] 
    }
})
