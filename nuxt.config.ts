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
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en.yaml',
      },
      {
        name: 'Português',
        code: 'pt',
        language: 'pt-BR',
        file: 'pt.yaml',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
