// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['primeicons/primeicons.css'],

  app: {
    head: {
      title: '🔈 Lombardi.ai',
    },
  },

  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'vue-clerk/nuxt',
    '@nuxt/eslint',
  ],

  runtimeConfig: {
    tursoDBURL: process.env.TURSO_DB_URL,
    tursoDBToken: process.env.TURSO_DB_TOKEN,

    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.PINATA_GATEWAY_URL,

    elevenlabsApiKey: process.env.ELEVENLABS_API_KEY,

    nodeEnv: process.env.NODE_ENV,
  },

  primevue: {
    importTheme: { from: './assets/css/preset.ts' },
  },
});
