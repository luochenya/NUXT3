<script setup lang="ts">
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
    <FullLoading v-if="isFullLoading" />
    <NuxtLayout>
      <!-- 進度條 color顏色 height高度 -->
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* 過度動畫 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>