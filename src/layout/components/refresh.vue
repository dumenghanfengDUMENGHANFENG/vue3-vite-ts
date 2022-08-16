<template>
  <el-dropdown>
    <span class="el-dropdown-link"
      >操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">刷新当前</el-dropdown-item>
        <el-dropdown-item @click="closeOther">关闭其它</el-dropdown-item>
        <el-dropdown-item @click="closeAll">关闭全部</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import store from '@/store'
  defineOptions({
    name: 'Refresh'
  })
  const router = useRouter()
  const route = useRoute()
  // 刷新当前
  function refresh() {
    router.replace({ name: 'redirect', params: { path: route.fullPath } })
  }
  // 关闭其它
  function closeOther() {
    store.layout.closeOther(route.fullPath)
  }
  // 关闭全部
  function closeAll() {
    store.layout.closeAll()
    router.replace({
      path: '/workbench'
    })
  }
</script>
