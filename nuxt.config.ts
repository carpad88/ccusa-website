export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@formkit/nuxt',
    'nuxt-icon',
    'nuxt-directus',
  ],
  directus: {
    url: 'https://directus-production-a95e.up.railway.app',
  },
})
