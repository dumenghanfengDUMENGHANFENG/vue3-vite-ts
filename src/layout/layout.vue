<template>
  <div id="layout">
    <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside
        :style="{
          width: asideIsShow ? '65px' : '200px'
        }"
        class="layoutAside"
      >
        <el-menu
          :style="{
            width: asideIsShow ? '65px' : '200px',
            height: '100%'
          }"
          :collapse="asideIsShow"
          :collapse-transition="false"
          active-text-color="#1890FF"
          background-color="#001428"
          text-color="#fff"
          unique-opened
          router
          :default-active="asidePath"
        >
          <Aside
            v-for="item in asideList.children"
            :key="item.path"
            :asideItem="item"
          />
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-container
        class="layoutMain"
        :style="{
          width: asideIsShow ? 'calc(100% - 65px)' : 'calc(100% - 200px)'
        }"
      >
        <!-- 顶部 -->
        <Header />
        <Tabs />
        <!-- 中间路由 -->
        <el-main class="layoutContent"><router-view /></el-main>
        <!-- 底部 -->
        <el-footer class="layoutFooter">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from "./components/aside.vue";
import Header from "./components/header.vue";
import Tabs from "./components/tabs.vue";

const store = layoutStore();
const { asideIsShow, asidePath, asideList } = storeToRefs(store);
// console.log(asideList.value);
</script>
<style lang="scss" scoped></style>
