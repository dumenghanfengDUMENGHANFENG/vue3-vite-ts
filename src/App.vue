<template>
  <!-- 组件国际化全局访问 -->
  <!-- size="large" -->
  <el-config-provider :locale="locale" size="large">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  const locale = zhCn
</script>
