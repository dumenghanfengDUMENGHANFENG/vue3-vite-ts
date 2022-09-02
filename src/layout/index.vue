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
          <Breadcrumb />
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
  import layoutStore from '@/store/modules/layout'
  defineOptions({
    name: 'Layout'
  })

  /**
asideTypeList 侧边栏数据
asideIsShow 侧边栏是否打开
asideIsShowClick 侧边栏点击
**/
  const router = useRouter()
  const path = ref<string>(layoutStore().path)
  const tabsList = ref(layoutStore().tabsList)
  const asideList = router.options.routes
  const asideIsShow = ref<any>(layoutStore().asideIsShow)
  watch([layoutStore()], () => {
    path.value = layoutStore().path
    tabsList.value = layoutStore().tabsList
  })
  function asideIsShowClick() {
    asideIsShow.value = !asideIsShow.value
    layoutStore().asideIsShowClick(asideIsShow.value)
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
