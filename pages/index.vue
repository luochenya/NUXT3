<script setup lang="ts">
// 拿取APP的配置
const appConfig = useAppConfig()

onMounted(() => {
  console.log(appConfig.theme.primaryColor)
})
</script>

<template>
  <div>
    <nuxt-link to="/demo">前往demo</nuxt-link>
  </div>
</template>