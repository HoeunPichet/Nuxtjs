// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Server configuration
  devServer: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  app: {
    // Seo Meta
    head: {
      htmlAttrs: {
        lang: 'en', // Replace with your desired language code
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Starting',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
        },
      ],
    }
  },

  css: [
    '~/assets/css/app.css',
    '~/assets/css/components/animation.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"]
})