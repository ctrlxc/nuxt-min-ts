export default {
  mode: 'spa',
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    // ['nuxt-buefy', { css: false, materialDesignIcons: false }]
    ['nuxt-buefy']
  ],
  plugins: [
    '~/plugins/buefy'
  ],
  // head: {
  //   script: [
  //     { src: '@/assets/buefy/buefy.min.js' }
  //   ],
  //   link: [
  //     { rel: 'stylesheet', href: '@/assets/buefy/buefy.min.css' }
  //   ]
  // },
  typescript: {
    typeCheck: {
      eslint: true
    }
  } /*,
  build: {
    extend (config: any, _ctx: any) {
      config.devtool = 'inline-cheap-module-source-map'
    }
  }
  */
}
