<script setup lang="ts">
import "animate.css"
// 拿取APP的配置
const appConfig = useAppConfig()
const nuxtApp = useNuxtApp()

// 是否首次加載
const isFullLoading = ref(true)

nuxtApp.hook('page:start', () => {
  isFullLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isFullLoading.value = false
})
</script>

<template>
  <div>
    <!-- 首屏加載動畫 -->
    <FullLoading v-if="isFullLoading && appConfig.IS_FULL_LOADING" />
    <NuxtLayout>
      <!-- 進度條 color顏色 height高度 -->
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* 過度動畫 */
.page-enter-active {
  animation: fadeIn ease-in 0.3s;
}
.page-leave-active {
  animation: fadeOut ease-out 0.3s;
}
</style>