<template>
  <el-radio
    v-for="(item, index) in radioList"
    :key="index"
    :label="item.label"
    :disabled="item.disabled"
    :border="item.border"
    >{{ item.value }}</el-radio
  >
</template>

<script setup lang="ts">
import { radioListType } from "../type";
type PropsType = {
  radioList: radioListType;
};
defineProps<PropsType>();
</script>
