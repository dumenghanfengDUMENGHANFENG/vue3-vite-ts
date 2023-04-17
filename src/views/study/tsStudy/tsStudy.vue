<template>
  <div id="overallForm">
    {{ formModel }}
    <overallForm :formModel="formModel" :formList="formList" />
    <el-button type="primary" @click="onSubmit1">Create</el-button>
  </div>
</template>
<script lang="tsx" setup>
const selectList = [
  {
    label: "Option11",
    value: "label1"
  },
  {
    label: "Option2",
    value: "label2"
  }
];
const radioList = [
  {
    label: "1",
    value: "Option 1"
  },
  {
    label: "2",
    value: "Option 21"
  }
];
const formList = [
  {
    type: "input",
    label: "输入框",
    model: "input"
  },
  {
    type: "select",
    label: "下拉框",
    model: "select",
    component: {
      class: "form-item1",
      clearable: true,
      selectList: selectList,
      onChange: () => {
        console.log("112211");
      }
    }
  },
  {
    type: "datePicker",
    label: "时间输入",
    model: "datePicker"
  },
  {
    type: "radio",
    label: "单选",
    model: "radio",
    component: {
      radioList: radioList
    }
  },
  {
    type: "switch",
    label: "滑块",
    model: "switch"
  }
];
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
const formModel = reactive<
  Nullable<{
    input: string;
    select: string;
    datePicker: string;
    radio: string;
    switch: string;
  }>
>({
  input: "",
  select: "",
  datePicker: "",
  radio: "",
  switch: null
});
const onSubmit1 = () => {
  console.log(formModel);
};
// let sum: (x: number, y: number) => number = (x: number, y: number): number => {
//   return x + y;
// };
let sum1: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
type sumType = {
  // "/user": { name: string; age: number; phone: string };
  // "/seals": { seal: Seal[] };
  name1: { name: string; age: number; phone: string };
};
let sum2 = (x: number, y: number): number => {
  return x + y;
};
let sum3 = <x1 extends keyof sumType>(x: x1): string => {
  return x;
};

// let sum3 = (x: sumType): sumType => {
//   return x;
// };
console.log(sum1(1, 2), sum2(1, 2), sum3("name1"));
// interface type1 {
//   (a: string, b: string): boolean;
// }
const typeA = {};
console.log(typeA);
interface idType<T, U> {
  id1: T;
  id2: U;
}
const idObj: idType<string, number> = {
  id1: "123",
  id2: 1
};
console.log(idObj);
// interface Seal {
//   name: string;
//   url: string;
// }
// interface API {
//   "/user": { name: string; age: number; phone: string };
//   "/seals": { seal: Seal[] };
// }
// const api = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
//   return fetch(url).then((res) => res.json());
// };
</script>
<style lang="scss">
#overallForm {
  .form-item1 {
    width: 100% !important;
  }
}
</style>

<style lang="scss" scoped></style>
