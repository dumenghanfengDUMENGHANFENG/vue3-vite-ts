<template>
  <el-date-picker
    :type="type || 'datetimerange'"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
  />
</template>

<script setup lang="ts">
type PropsType = {
  type?:
    | "year"
    | "month"
    | "date"
    | "datetime"
    | "week"
    | "datetimerange"
    | "daterange";
};
defineProps<PropsType>();
</script>
