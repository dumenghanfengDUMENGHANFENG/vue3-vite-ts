<template>
  <div class="button">
    <!-- <OverallButton :type="'primary'">123</OverallButton>
    <OverallButton plain size="small" />
    <OverallButton round color="#626aef" />
    <OverallButton circle :icon="'IEpDelete'" /> -->

    <div>{{ radio1 }}1231</div>
    <!-- <overallInput
      v-model="input"
      @change="inputChange"
      placeholder="Please input"
    /> -->

    <!-- <overallSelect
      v-model="selectName"
      :selectList="selectList"
      :selectOptionObj="selectOptionObj"
      @change="inputChange"
      clearable
      placeholder="请选择"
    /> -->

    <!-- <overallDatePicker v-model="value1" /> -->
    <!-- <overallDatePicker v-model="value1" /> -->
    <!-- <overallSwitch
      v-model="value1"
      :active-value="true"
      :inactive-value="false"
      active-text="Open"
      inactive-text="Close"
    /> -->
    <overallRadio
      v-model="radio1"
      :radioType="'button'"
      :radioList="radioList"
    />
    <overallRadio v-model="radio1" :radioList="radioList" />
  </div>
</template>
<script setup lang="tsx">
const radio1 = ref("1");
const radioList = [
  {
    label: "1",
    value: "Option 1",
    disabled: true,
    border: true
  },
  {
    label: "2",
    value: "Option 21"
  }
];
// const value1 = ref<boolean>(true);
// const selectName = ref<string>("");
// // const value1 = ref<[Date, Date]>([
// //   new Date(2000, 10, 10, 10, 30),
// //   new Date(2000, 10, 11, 10, 10)
// // ]);
// const selectList = [
//   {
//     id: "Option1",
//     name: "label"
//   },
//   {
//     id: "Option2",
//     name: "Option2"
//   },
//   {
//     id: "Option3",
//     name: "Option3"
//   }
// ];

// const selectOptionObj = {
//   value: "id",
//   label: "name"
// };
// const inputChange = () => {
//   console.log("2222");
// };
// const buttonName = () => {
//   return 222;
// };
</script>

<style lang="scss" scoped></style>
