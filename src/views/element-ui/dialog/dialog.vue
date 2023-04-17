<template>
  <div class="dialog" @click="clickDiv">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
// console.log(LAYOUT_BACKGROUND);
// const router = useRouter()
// console.log(router)
const name = ref<string>("223333");
const router = useRouter();
const clickDiv = () => {
  router.push({
    path: "/workbench"
  });
};
</script>
<style lang="scss" scoped>
// .login {
//   width: 100%;
//   height: 500px;
//   display: flex;
//   justify-content: center;
// }
</style>
