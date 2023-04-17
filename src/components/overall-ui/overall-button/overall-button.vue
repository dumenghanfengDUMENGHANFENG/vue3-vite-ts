<template>
  <el-button :type="type" v-bind="$attrs">
    <template v-for="slot in Object.keys(slots)" #[slot]>
      <slot :name="slot"></slot>
    </template>
  </el-button>
</template>

<script setup lang="ts">
type PropsType = {
  type?: "primary" | "success" | "info" | "warning" | "danger";
};
const slots = useSlots();
defineProps<PropsType>();
</script>
