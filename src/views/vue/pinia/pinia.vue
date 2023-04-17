<template>
  <div>
    <!-- {{ $t("home") }}
    <div>{{ name }}||state</div>
    <div>{{ nameNew }}||getters</div> -->
    <div @click="clickDiv">电机更换</div>
    {{ name }}
  </div>
</template>
<script setup lang="ts">
const name = ref<string>("223333");
// // console.log(i18nt("home"));
// let store = layoutStore();
// const { name, nameNew } = storeToRefs(store);
// layoutStore().reset();
const clickDiv = () => {
  // store.$patch({
  //   name: "/workbench"
  // });
  // name.value = "你好2222";
};
console.log("111");
</script>
<style lang="scss"></style>
