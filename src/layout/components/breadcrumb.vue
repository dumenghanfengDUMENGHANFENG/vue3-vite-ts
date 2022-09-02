<template>
  <el-breadcrumb class="header-breadcrumb" separator="/">
    <div v-if="filter()">
      <el-breadcrumb-item key="/workbench">{{ route.matched[0].meta.title }}</el-breadcrumb-item>
    </div>
    <div v-else>
      <el-breadcrumb-item key="/workbench" @click="breadcrumbClick()">工作台</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in route.matched" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Breadcrumb'
  })
  const router = useRouter()
  function breadcrumbClick() {
    router.push({
      path: '/'
    })
  }
  const route = useRoute() //获取路由参数
  function filter() {
    return route.matched[0].meta.title === route.matched[1].meta.title
  }
</script>

<style scoped lang="scss">
  .header-breadcrumb {
    margin-left: 15px;
  }
</style>
