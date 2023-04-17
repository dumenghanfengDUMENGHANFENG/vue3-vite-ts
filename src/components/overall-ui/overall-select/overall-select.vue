<template>
  <el-select size="large">
    <!-- <el-option
      v-for="item in selectList"
      :key="item[selectOptionObj ? selectOptionObj.label : 'value']"
      :label="item[selectOptionObj ? selectOptionObj.label : 'label']"
      :value="item[selectOptionObj ? selectOptionObj.label : 'value']"
    /> -->
    <el-option
      v-for="item in selectList"
      :key="item[selectOptionObj?.value || 'value']"
      :label="item[selectOptionObj?.label || 'label']"
      :value="item[selectOptionObj?.value || 'value']"
    />
  </el-select>
</template>

<script setup lang="tsx">
type PropsType = {
  selectList: Array<any>;
  selectOptionObj?: {
    label: string;
    value: string;
  };
};
defineProps<PropsType>();
</script>
