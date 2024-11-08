// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  app: {
    // 設置全局的過度動畫 也可單獨設置
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'NUXT3 DEMO',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ]
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
  ],
  i18n: {
    vueI18n: '~/locales/index.config.ts'
  },
  devServer: {
    port: 7777 // 端口號
  },
  build: {
    // 排除正式環境中的 robots.txt 文件
    extend (config: any) {
      if (process.env.VITE_ENV_TYPE === 'prod') {
        const robotsPath = resolve(__dirname, 'public', 'robots.txt')
        const index = config.module.rules.findIndex(
          rule => rule.test && rule.test.test('.txt')
        )

        if (index > -1) {
          config.module.rules[index].exclude.push(robotsPath)
          console.log('Excluding robots.txt from production build.')
        }
      }
    }
  },
  css:[
    '~/assets/styles/index.scss'
  ],
  plugins: [
    '~/plugins/vue-lazyload.ts'
  ],
  vite: {
    // 預處理器配置
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'  // 使用現代編譯器
        }
      }
    },
    server: {
      proxy: {
        '/useApi': {
          target: process.env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/useApi/, '')
        }
      }
    }
  }
})