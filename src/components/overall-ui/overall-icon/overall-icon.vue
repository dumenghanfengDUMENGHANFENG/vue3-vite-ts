<template>
  <el-icon :size="size || 15" :color="color || '#000000'" v-bind="$attrs">
    <component :is="icon" />
    <!-- <template v-for="slot in Object.keys(slots)" #[slot]>
      <slot :name="slot"></slot>
    </template> -->
  </el-icon>
</template>

<script setup lang="ts">
type PropsType = {
  color?: string;
  size?: number | string;
  icon?: string;
};
// const slots = useSlots();
defineProps<PropsType>();
</script>
