// import UnkitModule from '../nuxt'

export default defineNuxtConfig({
  alias: { unkit: '../src' },
  modules: ['../src/nuxt'],
  unkit: {
    prefix: 'useUnJS'
  }
})
