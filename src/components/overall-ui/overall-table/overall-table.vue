<template>
  <el-table :data="tableData" stripe border>
    <el-table-column type="selection" width="55" />
    <el-table-column
      v-for="item in tableColumn"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :fixed="item.fixed"
      :type="item.type"
    >
      <template #default="scope">
        <component
          :is="item.template && scope.$index !== -1 ? item.template : null"
          :scope="scope"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="tsx">
type PropsType = {
  tableColumn: Array<any>;
  tableData: any;
};
// 设置默认值
// withDefaults(defineProps<PropsType>(), {
//   tableColumn: [],
//   tableData: []
// });
defineProps<PropsType>();
</script>
