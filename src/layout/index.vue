<template>
  <div class="app-main">
    <!-- 侧边栏 -->
    <div
      class="aside"
      :style="{
        width: asideIsShow ? '65px' : '200px'
      }"
    >
      <el-menu
        :style="{
          width: asideIsShow ? '65px' : '200px',
          height: '100%'
        }"
        active-text-color="#1890FF"
        background-color="#304456"
        text-color="#BFCBD9"
        :collapse="asideIsShow"
        :collapse-transition="false"
        :default-active="path"
        unique-opened
        router
      >
        <Aside v-for="item in asideList" :key="item.path" :asideObj="item" />
      </el-menu>
    </div>
    <!-- 右边内容 -->
    <div
      class="content"
      :style="{
        width: asideIsShow ? 'calc(100% - 65px)' : 'calc(100% - 200px)',
        height: '100%'
      }"
    >
      <!-- 头部 -->
      <div class="header">
        <div class="header-left">
          <el-icon @click="asideIsShowClick" class="header-collapse" :size="20" v-if="asideIsShow">
            <Fold />
          </el-icon>
          <el-icon @click="asideIsShowClick" class="header-collapse" :size="20" v-else>
            <Expand />
          </el-icon>
          <Breadcrumb :path="path" />
        </div>
        <!-- 退出登录 -->
        <Dropdown />
      </div>
      <div class="tabs">
        <Tabs class="tabsLeft" :path="path" :tabsList="tabsList" />
        <Refresh class="tabsClose" />
      </div>
      <!-- 中间内容 -->
      <div class="main">
        <div class="main-content">
          <router-view :key="path" class="router-view" />
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">独梦寒风练手</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Aside from '@/layout/components/aside.vue'
  import Breadcrumb from '@/layout/components/breadcrumb.vue'
  import Tabs from '@/layout/components/tabs.vue'
  import Refresh from '@/layout/components/refresh.vue'
  import Dropdown from '@/layout/components/dropdown.vue'
  import routerMap from '@/router/routerMap'
  defineOptions({
    name: 'Layout'
  })
  type asideTypeList = {
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
  }[]
  /**
  asideTypeList 侧边栏数据
  asideIsShow 侧边栏是否打开
  asideIsShowClick 侧边栏点击
  **/
  const path = ref(store.layout.path)
  const tabsList = ref(store.layout.tabsList)
  const asideList: asideTypeList = routerMap
  const asideIsShow = ref<any>(store.layout.asideIsShow)
  // 在组件即将因为响应式状态变更而更新其 DOM 树之前调用
  onBeforeUpdate(() => {
    path.value = store.layout.path
    tabsList.value = store.layout.tabsList
  })
  function asideIsShowClick() {
    asideIsShow.value = !asideIsShow.value
    store.layout.asideIsShowClick(asideIsShow.value)
  }
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;

    .header-icon {
      padding-right: 15px;
    }
  }
</style>
