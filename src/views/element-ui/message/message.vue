<template>
  <div>
    {{ $t("home") }}
    <div>{{ name }}</div>
    <div @click="clickDiv">电机更换</div>
  </div>
</template>
<script setup lang="ts">
// console.log(i18nt("home"));
let store = layoutStore(); //接收
const { name, path } = storeToRefs(store);
console.log(store);
console.log(name);
console.log(path);

const clickDiv = () => {
  // store.$patch({
  //   name: "/workbench"
  // });
  name.value = "你好";
};
</script>
<style lang="scss"></style>
