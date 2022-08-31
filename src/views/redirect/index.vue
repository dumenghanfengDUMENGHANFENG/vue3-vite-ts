<template>
  <h1></h1>
</template>
<script setup lang="ts">
  // 重定向页,配合刷新当前页使用
  defineOptions({
    name: 'Redirect'
  })
  const router = useRouter()
  const route = useRoute()
  const { params, query } = route
  const { path } = params
  router.replace({ path: `${path}`, query })
</script>
