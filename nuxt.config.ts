// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Core',
      meta: [
        { name: 'description', content: 'I am using the extends feature in Nuxt!' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
