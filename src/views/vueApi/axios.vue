<template>
  <div>
    axios
    <div @click="click1">点击</div>
    <div>--------------------------------------------</div>
    <div @click="redirect">刷新</div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { login, login1, AxiosApis } from '@/api/axios'
  import { useRouter, useRoute } from 'vue-router'
  defineOptions({
    name: 'Axios'
  })
  const router = useRouter()
  const route = useRoute()
  function redirect() {
    router.replace({ name: 'redirect', params: { path: route.fullPath } })
  }
  onBeforeMount(() => {})
  function click1() {
    // console.log(AxiosApis)
    // AxiosApis.login({
    //   loginType: 1,
    //   password: '123456',
    //   username: 'siccadmin'
    // })
    AxiosApis.login({
      loginType: 1,
      password: '123456',
      username: 'siccadmin'
    })
      .then((response) => {
        console.log('成功', response)
      })
      .catch((err) => {
        console.log('失败', err)
      })
    AxiosApis.login({
      loginType: 1,
      password: '1234567777',
      username: 'siccadmin'
    })
      .then((response) => {
        console.log('成功', response)
      })
      .catch((err) => {
        console.log('失败修饰器', err)
      })
    login({
      loginType: 1,
      password: '123456',
      username: 'siccadmin'
    })
      .then((response) => {
        console.log('成功', response)
      })
      .catch((err) => {
        console.log('失败', err)
      })
    login1({
      loginType: 1,
      password: '123456',
      username: 'siccadmin'
    })
      .then((response) => {
        console.log('成功', response)
      })
      .catch((err) => {
        console.log('失败', err)
      })
  }
</script>

<style scoped></style>
