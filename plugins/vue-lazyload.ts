
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,
    // error: '/path/to/error.png',
    // loading: '/path/to/loading.gif',
    attempt: 1,
  })
})