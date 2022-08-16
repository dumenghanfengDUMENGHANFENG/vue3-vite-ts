<template>
  <el-breadcrumb class="header-breadcrumb" separator="/">
    <el-breadcrumb-item key="/workbench" @click="breadcrumbClick()">工作台</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="item in store.layout.path === '/workbench' ? [] : filter(store.layout.path.split('/'))"
      :key="item"
      >{{ item }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import store from '@/store'
  defineOptions({
    name: 'Breadcrumb'
  })
  const router = useRouter()
  function breadcrumbClick() {
    store.layout.modifyPath('/workbench')
    router.push({
      path: '/workbench'
    })
  }
  // 过滤
  function filter(item: Array<string>) {
    return item.filter((ele: string) => ele !== '')
  }
</script>

<style scoped lang="scss">
  .header-breadcrumb {
    margin-left: 15px;
  }
</style>
