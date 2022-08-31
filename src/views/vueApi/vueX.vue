<template>
  <h1 @click="vueXClick">点击修改vuex111</h1>
</template>

<script setup lang="ts">
  // import store from '@/store'
  defineOptions({
    name: 'vueX'
  })
  console.log(store)
  function vueXClick() {
    // console.log(store.app.$state)
    // console.log(store.app.nameNew)
    // store.app.changeGoods('123123')
    // console.log(store.app.$state)
    // console.log(store.app.nameNew)
  }
</script>

<style scoped></style>
