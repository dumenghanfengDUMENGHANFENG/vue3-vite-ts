<template>
  <div @click="messageClick">Message</div>
</template>

<script setup lang="ts">
  // import { TipsMessage } from '@/components/tipsMessage/index'
  defineOptions({
    name: 'Message'
  })
  function messageClick() {
    // 不用全局公共封装了,vite已经让ElMessage做了全局
    ElMessage({
      type: 'warning',
      message: '测试'
    })
  }
</script>

<style scoped></style>
