export default {
  mode: 'spa',
  buildModules: [
    '@nuxt/typescript-build'
  ],
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}
