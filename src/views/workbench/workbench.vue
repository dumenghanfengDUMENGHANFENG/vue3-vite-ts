<template>
  <div class="workbench">
    <div @click="clickDiv1">清空所有</div>
    <div>------------------------------------</div>
    <div @click="clickDiv">workbench跳转</div>
    <div>------------------------------------</div>
    {{ x }}, {{ y }}x,y
  </div>
</template>
<script setup lang="ts">
import useMousePosition from "../../hooks/useMousePosition";
let store = layoutStore();
const router = useRouter();
const clickDiv1 = () => {
  router.push({
    path: "/login"
  });
  store.$reset();
};
const clickDiv = () => {
  router.push({
    path: "/dialog"
  });
};
// 使用hooks功能
const { x, y } = useMousePosition();
</script>
<style scoped lang="scss">
.workbench {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
