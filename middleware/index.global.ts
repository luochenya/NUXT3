export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('路由守衛：', to, from)
  console.log('路由守衛：', to.path)
})
