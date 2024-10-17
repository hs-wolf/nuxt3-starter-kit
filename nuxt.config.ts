export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/style.scss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt3 Starter Kit',
      meta: [
        { name: 'description', content: 'Nuxt3 Starter Kit' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  tailwindcss: {
    viewer: false,
  },
})
