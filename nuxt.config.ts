// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
  ],
  ssr: false,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ], compatibilityDate: '2024-11-01',
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: false,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },

})
