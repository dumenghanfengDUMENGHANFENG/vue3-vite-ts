<template>
  <el-breadcrumb class="header-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in routerList" :key="item.path" @click="breadcrumbClick(index)">{{
      item.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import store from '@/store'
  defineOptions({
    name: 'Breadcrumb'
  })

  const router = useRouter()
  const routerList = store.layout.routerList
  function breadcrumbClick(index: Number) {
    if (index === 0) {
      store.layout.modifyPath('/workbench')
      router.push({
        path: '/workbench'
      })
    }
  }
</script>

<style scoped lang="scss">
  .header-breadcrumb {
    margin-left: 15px;
  }
</style>
