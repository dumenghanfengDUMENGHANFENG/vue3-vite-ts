<template>
  <el-switch
    :style="`--el-switch-on-color: ${
      switchOn || '#409eff'
    }; --el-switch-off-color: ${switchOff || '#dcdfe6'}`"
  />
</template>

<script setup lang="ts">
type PropsType = {
  switchOn?: string;
  switchOff?: string;
};
defineProps<PropsType>();
</script>
