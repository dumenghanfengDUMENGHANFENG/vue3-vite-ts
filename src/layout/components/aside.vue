<template>
  <!-- 一级页面 -->
  <el-menu-item @click="routerClick(asideObj)" v-if="!asideObj.children" :index="asideObj.path">
    <component :is="asideObj.meta.icon" class="menuIcon" />
    <span>{{ asideObj.meta.title }}</span>
  </el-menu-item>
  <!-- 二级页面 -->
  <el-sub-menu :index="asideObj.path" v-else>
    <template #title>
      <component :is="asideObj.meta.icon" class="menuIcon" />
      <span>{{ asideObj.meta.title }}</span>
    </template>
    <el-menu-item-group v-for="item in asideObj.children" :key="item.path">
      <el-menu-item @click="routerClick(item)" :index="item.path">
        <component :is="item.meta.icon" class="menuIcon" />
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script setup lang="ts">
  defineOptions({
    name: 'Aside'
  })
  type routerType = {
    name: string
    path: string
    meta: {
      title: string
      icon: string
    }
    children?: {
      name: string
      path: string
      meta: {
        title: string
        icon: string
      }
    }[]
  }
  defineProps({
    asideObj: {
      type: Object as () => routerType,
      required: true
    }
  })
  // 菜单点击
  function routerClick(item: routerType) {
    store.layout.addRouterList({
      name: item.name,
      path: item.path,
      meta: {
        title: item.meta.title,
        icon: item.meta.icon
      }
    })
    store.layout.modifyPath(item.path)
  }
</script>

<style scoped lang="scss">
  .menuIcon {
    width: 24px;
    height: 18px;
    margin-right: 5px;
  }
</style>
