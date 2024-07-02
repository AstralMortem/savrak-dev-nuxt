// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/style.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  app: {
    head: {
      link: [
        {crossorigin:"", rel:"preconnect", href:"https://fonts.googleapis.com"},
        {crossorigin:"", rel:"preconnect", href:"https://fonts.gstatic.com"},
        {rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"},
        {rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Play:wght@400&display=swap"}
      ]
    }
  }
})