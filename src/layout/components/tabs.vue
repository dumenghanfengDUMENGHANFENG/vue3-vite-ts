<template>
  <el-tabs v-model="store.layout.path" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.name" :name="item.path" />
  </el-tabs>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import store from '@/store'
  const router = useRouter()
  const tabsList = store.layout.tabsList
  // 点击tabs
  function tabClick({ paneName }: any) {
    store.layout.modifyPath(paneName)
    router.push({
      path: paneName
    })
  }
  // 删除tabs
  function removeTab(targetName: string) {
    store.layout.removeTabsList(targetName)
  }
</script>
