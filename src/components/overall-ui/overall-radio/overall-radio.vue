<template>
  <el-radio-group>
    <radioButton v-if="radioType === 'button'" :radioList="radioList" />
    <radioButtonCircle v-else :radioList="radioList" />
  </el-radio-group>
</template>

<script setup lang="ts">
import radioButton from "./components/radio-button.vue";
import radioButtonCircle from "./components/radio-button-circle.vue";
import { radioListType } from "./type";
type PropsType = {
  radioType?: string;
  radioList: radioListType;
};
defineProps<PropsType>();
</script>
