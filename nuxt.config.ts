export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  nitro: {
    preset: 'static',
  },
  app: {
    head: {
      title: 'Климатизация и ремонти - Варна',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
});
