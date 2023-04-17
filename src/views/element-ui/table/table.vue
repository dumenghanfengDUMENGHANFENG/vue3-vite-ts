<template>
  <div>
    <div @click="tableClick">点击</div>
    <OverallTable :tableColumn="tableColumn" :tableData="tableData" />
  </div>
</template>

<script setup lang="tsx">
const tableColumn = ref<any>([
  {
    type: "index",
    label: "序号",
    prop: "name",
    width: 100
    // fixed: "right"
  },
  {
    label: "姓名1",
    prop: "name",
    width: 100
    // fixed: "right"
  },
  {
    label: "性别",
    prop: "gender",
    template: ({ scope }: { scope: any }) => {
      return (
        <div>
          <Overall-Button plain size="small">
            {scope.row.gender}
          </Overall-Button>
        </div>
      );
    }
  },
  {
    label: "地址11",
    prop: "city"
  }
]);
const tableData = [
  {
    name: "张三1",
    gender: "男",
    city: "江苏"
  },
  {
    name: "李四",
    gender: "女",
    city: "浙江"
  },
  {
    name: "王五",
    gender: "男",
    city: "安徽"
  }
];
const router = useRouter();
const tableClick = () => {
  // tableColumn.value[0].label = "姓名修改";
  // console.log(tableColumn.value, "姓名修改");
  router.replace({
    path: "/button"
  });
};
</script>
<style lang="scss" scoped></style>
