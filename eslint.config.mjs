// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  ignores: [
    './pnpm-lock.yaml',
    './node_modules',
    './dist',
    './.nuxt',
    './.output',
  ],
})
