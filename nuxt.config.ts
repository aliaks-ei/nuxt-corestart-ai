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

  runtimeConfig: {},

  supabase: {
    // Redirect to login page if user is not authenticated
    redirectOptions: {
      login: "/login",
      callback: "/auth/callback",
      exclude: ["/"],
    },
  },
});
