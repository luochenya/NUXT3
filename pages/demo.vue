<script setup lang="ts">
import { handleThousands } from '@/utils'
import { basicDataApi, basicDataApis } from '@/api/demo'
async function getData() {
  const res = await basicDataApi()
  console.log('普通接口獲取數據', res)
}

import { COMMON_STATUS } from '@/constants/common'
console.log('公用常量', COMMON_STATUS.options)

// 圖片懶加載
const imgUrl = 'https://picsum.photos/200/300'

// 語言切換
const { t, locale } = useI18n()
const localeChangeHandle = (lang) => {
  locale.value = lang
}

// pinia
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/useUserStore'
const userStore = useUserStore()
// 结构解析
const { name, age, sex } = storeToRefs(userStore)
console.log(name.value, age.value, sex.value)


onMounted(() => {
  getData()
  // 拿取APP的配置
  const appConfig = useAppConfig()
  console.log(appConfig.theme.primaryColor)

  // 獲取當前用戶使用的主題
  const isDark = usePreferredDark()
  console.log(isDark.value)
})

const { data } = await basicDataApis()
// 設置頭部標籤
useHead({
  title: data.value.message,
  meta: [
    { name: 'description', content: '測試demo頁面' }
  ]
})
</script>

<template>
  <div>
    <nuxt-link to="/">前往index</nuxt-link>
    <div class="demo-box">11</div>
    
    <h6>
      多語言：{{ $t("welcome") }}
      <el-button @click="localeChangeHandle('en')">切換英文</el-button>
      <el-button @click="localeChangeHandle('tw')">切換繁體</el-button>
    </h6>

    <h5>
      金額千位符：{{ handleThousands(1000000000.34) }}
    </h5>

    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <img v-lazy="imgUrl" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.demo-box {
  width: 200px;
  height: 100px;
  background: var( --theme-background-color1);
}
</style>