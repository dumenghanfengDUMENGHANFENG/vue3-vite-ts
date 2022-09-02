<template>
  <!-- 一级页面 -->
  <el-menu-item
    @click="routerClick(asideObj)"
    v-if="!asideObj.hidden && asideObj.nestingIsShow"
    :index="asideObj.redirect ? asideObj.redirect : asideObj.path"
  >
    <component :is="asideObj.meta.icon" class="menuIcon" />
    <span>{{ asideObj.meta.title }}</span>
  </el-menu-item>
  <!-- 二级页面 -->
  <el-sub-menu
    :index="asideObj.redirect ? asideObj.redirect : asideObj.path"
    v-if="!asideObj.hidden && !asideObj.nestingIsShow"
  >
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
  import layoutStore from '@/store/modules/layout'
  defineOptions({
    name: 'Aside'
  })
  defineProps({
    asideObj: {
      type: Object as () => Record<string, any>,
      required: true
    }
  })
  // 菜单点击
  function routerClick(item: Record<string, any>) {
    layoutStore().addRouterList({
      name: item.name,
      path: item.redirect ? item.redirect : item.path,
      meta: {
        title: item.meta.title,
        icon: item.meta.icon
      }
    })
    // layoutStore().addRouterList({
    //   name: item.name,
    //   path: item.path,
    //   meta: {
    //     title: item.meta.title,
    //     icon: item.meta.icon
    //   }
    // })
    // layoutStore().modifyPath(item.redirect ? item.redirect : item.path)
  }
</script>

<style scoped lang="scss">
  .menuIcon {
    width: 24px;
    height: 18px;
    margin-right: 5px;
  }
</style>
