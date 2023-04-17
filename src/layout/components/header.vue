<template>
  <el-header class="layoutHeader">
    <div class="header-left">
      <!-- 侧边栏开关 -->
      <overall-icon
        @click="layoutAsideCLick"
        :size="'20'"
        :icon="asideIsShow ? 'IEpExpand' : 'IEpFold'"
        class="icon"
      />
      <!-- 页面进度 -->
      <el-breadcrumb class="rate">
        <el-breadcrumb-item>
          <el-dropdown class="dropdown" @command="headersCommand">
            <span class="rateCheck">
              {{ headersId }}
              <overall-icon :color="'#606266'" :icon="'IEpArrowDown'" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(item, index) in headersList"
                  :key="item.id"
                  :command="index"
                  >{{ item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in headersCommandList" :key="item">{{
          item
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <!-- 全屏 -->
      <overall-icon
        :size="'20'"
        @click="fullScreenCLick"
        :icon="isFullscreen ? 'IEpFullScreen' : 'IEpRank'"
        class="icon"
        :class="isFullscreen ? 'fullScreen1' : 'fullScreen'"
      />
      <!-- 登录 -->
      <el-dropdown class="dropdown" @command="dropdownCommand">
        <span class="rateCheck">
          {{ loginObj.user?.userName }}
          <overall-icon :color="'#606266'" :icon="'IEpArrowDown'" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup lang="ts">
import { LayoutApis } from "@/apis/layout";
import { useFullscreen } from "@vueuse/core";
const {
  asideIsShow,
  headersId,
  headersList,
  refreshIndex,
  asideObj,
  asidePath,
  asideList,
  tabsPathList
} = toRefs(layoutStore());
const { loginObj } = toRefs(loginStore());
// 顶部模块切换
if (headersList.value.length === 0) {
  LayoutApis.headers()
    .then((res: any) => {
      headersList.value = res.data;
    })
    .catch((err: any) => {
      console.log("失败", err);
    });
}

const headersCommand = async (index: number) => {
  headersId.value = headersList.value[index].id;
  refreshIndex.value = 0;
  asideObj.value = {};
  tabsPathList.value = [
    {
      name: "workbench",
      path: "/workbench"
    }
  ];
  router.push({
    path: "/"
  });
};
// 顶部进度
const headersCommandList = computed<Array<string>>(() => {
  if (asidePath.value === "/workbench") {
    return [];
  } else {
    const list = headersCommandQuery(
      asideList.value.children,
      asidePath.value
    )?.split("/");
    return list?.slice(3, list.length - 1);
  }
});
const headersCommandQuery = (list: any, key: string | number) => {
  if (Array.isArray(list) && list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].path === key) {
        return list[i].component.name;
      } else {
        const item: any = headersCommandQuery(list[i].children, key);
        if (item) return item;
      }
    }
  }
};
// 侧边栏开关
const layoutAsideCLick = () => {
  asideIsShow.value = !asideIsShow.value;
};
// 全屏
const { isFullscreen, enter, exit } = useFullscreen();
const fullScreenCLick = () => {
  if (isFullscreen.value) {
    exit();
  } else {
    enter();
  }
};
// 退出登录
const router = useRouter();
const dropdownCommand = () => {
  layoutStore().loginSignOut();
  router.push({
    path: "/Login"
  });
};
</script>

<style scoped lang="scss">
.menuIcon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>
