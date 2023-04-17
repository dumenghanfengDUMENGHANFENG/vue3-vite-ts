<template>
  <div class="layoutTabs">
    <el-tabs
      v-model="asidePath"
      type="card"
      closable
      class="tabsLeft"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="item in tabsPathList"
        :key="item.path"
        :label="item.name"
        :name="item.path"
      />
    </el-tabs>
    <el-dropdown class="tabsRight" @command="dropdownCommand">
      <span class="rateCheck">
        标签操作
        <overall-icon :color="'#606266'" :icon="'IEpArrowDown'" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="1">刷新页面</el-dropdown-item>
          <el-dropdown-item command="2">关闭其他</el-dropdown-item>
          <el-dropdown-item command="3">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { TabPaneName } from "element-plus/es/components/tabs/src/tabs";
import { TabsPaneContext } from "element-plus/es/tokens/tabs";
const store = layoutStore();
const { tabsPathList, asidePath } = storeToRefs(store);
const router = useRouter();
const route = useRoute(); //获取路由参数
// 标签点击
const tabClick = (pane: TabsPaneContext) => {
  if (pane.paneName) {
    router.push({
      path: pane?.paneName?.toString()
    });
  }
};
// 删除标签
const removeTab = (name: TabPaneName) => {
  if (tabsPathList.value.length === 1) return;
  store.removeTabsList(name.toString());
  router.push({
    path: asidePath.value
  });
};
// 右侧操作
const dropdownCommand = (command: string | number | object) => {
  switch (command) {
    case "1":
      router.replace({ name: "redirect", params: { path: route.fullPath } });
      break;
    case "2":
      store.closeOther(route.fullPath);
      break;
    case "3":
      store.closeAll();
      router.replace({
        path: "/"
      });
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.menuIcon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
