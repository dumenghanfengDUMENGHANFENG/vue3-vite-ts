<template>
  <el-menu-item
    v-if="asideItem.children.length === 0 && !asideItem.meta.hidden"
    :index="asideItem.path"
    @click="menuClick(asideItem)"
  >
    <component
      v-if="asideItem.meta.icon"
      :is="asideItem.meta.icon"
      class="menuIcon"
    />
    <div v-else class="menuIcon"></div>
    <template #title>
      {{ asideItem.meta.title }}
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="asideItem.path">
    <template #title>
      <component
        v-if="asideItem.meta.icon"
        :is="asideItem.meta.icon"
        class="menuIcon"
      />
      <span>{{ asideItem.meta.title }}</span>
    </template>
    <el-menu-item-group v-for="item in asideItem.children" :key="item.path">
      <!-- 二级菜单 -->
      <el-menu-item
        :index="item.path"
        @click="menuClick(item)"
        v-if="item.children && item.children.length === 0 && !item.meta.hidden"
      >
        <component
          v-if="item.meta.icon"
          :is="item.meta.icon"
          class="menuIcon"
        />
        {{ item.meta.title }}
      </el-menu-item>
      <!-- 三级菜单 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length !== 0 && !item.meta.hidden"
      >
        <template #title>
          <component
            v-if="item.meta.icon"
            :is="item.meta.icon"
            class="menuIcon"
          />
          <span> {{ item.meta.title }}</span>
        </template>
        <el-menu-item
          @click="menuClick(itemThree)"
          v-for="itemThree in item.children"
          :key="itemThree.path"
          :index="itemThree.path"
        >
          <component
            v-if="itemThree.meta.icon"
            :is="itemThree.meta.icon"
            class="menuIcon"
          />
          {{ itemThree.meta.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElMenuItemGroup } from "element-plus";

/**
 * 侧边栏组件
 * @param el-menu-item：一级菜单
 * @param el-sub-menu 多级菜单
 */
const store = layoutStore();
type asideType = {
  asideItem: any;
};
defineProps<asideType>();
const menuClick = ({ name, path }: { name: string; path: string }) => {
  store.addTabs({ name, path });
};
</script>

<style scoped lang="scss">
.menuIcon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
