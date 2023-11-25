// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
  devtools: { enabled: true },
  supabase: {
    redirect: false
  }
});
