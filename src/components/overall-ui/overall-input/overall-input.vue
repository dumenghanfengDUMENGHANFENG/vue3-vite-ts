<template>
  <el-input v-bind="$attrs">
    <template v-for="slot in Object.keys(slots)" #[slot]>
      <slot :name="slot"></slot>
    </template>
  </el-input>
</template>

<script setup lang="ts">
type PropsType = {
  color?: string;
  size?: number | string;
  icon?: string;
};
const slots = useSlots();
defineProps<PropsType>();
</script>
