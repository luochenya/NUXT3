```bash
### [NUXT3中文文檔地址](https://www.nuxt.com.cn/)
### [NUXT3英文文檔地址](https://nuxt.com/)
```

```bash
# 進入 xx 目錄

# 安裝依賴
$ npm install

# 本地調試啓動服務
$ npm run dev
$ npm run serve

# 構建測試環境
$ npm run build:stage

# 構建生產環境
$ npm run build:prod
```

```bash
# 文件目录结构
├── .nuxt 
├── api 請求接口
├── assets 需要經過構建工具處理的靜態資源
│   ├── fonts 字體
│   ├── images 圖片
│   └── styles 公用樣式
│       ├── index.scss 樣式文件主入口
│       ├── mixin.scss 樣式函數
│       ├── reset.scss 樣式重置
│       ├── transition.scss 樣式動畫
│       └── variables.scss 樣式變量
├── components 所有組件
│   └── FullLoading 首屏加載動畫
│       └── index.vue
│   └── Layout layout佈局
│       ├── Footer 公用底部
│       └── Header 公用頭部
├── composables 組合式函數
│   ├── useDollarFetchRequest.ts $Fetch接口封裝
│   └── useFetchRequest.ts useFetch接口封裝
├── constants 公用常量
│   ├── common.ts 公用常量
│   └── service.ts 接口常量
├── layouts 可復用式佈局框架
│   ├── default 默認佈局（帶頭部底部）
│   └── nolayout 不帶頭部底部佈局
├── locales 語言包
│   ├── en.json 英語語言包
│   ├── index.config 多語言配置文件
│   └── zh-tw.json 中文繁體語言包
├── middleware 路由中間件
│   └── index.global.ts 全局路由守衛
├── node_modules 項目依賴包
├── pages 文件路由 對應頁面
├── plugins 註冊的插件
├── public 不經過處理的靜態資源
│   ├── favicon.ico 網頁tag上面的小ico圖標
│   └── robots.txt 測試環境防google爬蟲抓取（正式機忽略該文件）
├── server 服務器處理程序
├── utils 通用函數
├── .env 運行環境常量配置文件
├── .env.prod 正式環境常量配置文件
├── .env.stage 測試環境常量配置文件
├── .gitignore Git版本控制下忽略文件目錄
├── .nuxtignore 構建階段忽略文件
├── app.config.ts 項目公開響應式配置
├── app.vue 主要入口文件
├── error.vue 報錯頁面
├── nuxt.config.ts nuxt配置文件
├── package-lock.json 記錄npm install的時候安裝的各個npm package的來源和版本號
├── package.json 項目的描述 組件版本等
├── README.md 說明文件
└── tsconfig.json
```

```bash
# 安裝插件版本及來源

# pinia store
## https://www.nuxt.com.cn/modules/pinia

# i18n 多語言
## https://www.nuxt.com.cn/modules/i18n

# swiper 輪播插件
## https://www.nuxt.com.cn/modules/swiper

# vueuse
## https://www.nuxt.com.cn/modules/vueuse

```