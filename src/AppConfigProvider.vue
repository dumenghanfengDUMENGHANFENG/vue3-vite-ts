<template>
  <el-config-provider :locale="locale">
    <App />
  </el-config-provider>
</template>

<script setup lang="ts">
import App from "./App.vue";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
</script>
<style lang="scss"></style>
