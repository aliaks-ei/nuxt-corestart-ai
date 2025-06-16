// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/supabase",
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
    public: {}
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    // Redirect to login page if user is not authenticated
    redirectOptions: {
      login: "/login",
      callback: "/auth/callback",
      exclude: ["/"],
    },
  },
});
