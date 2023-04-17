<template>
  <div id="overallForm">
    {{ overallFormData }}
    <overallForm
      ref="overallFormRef"
      :formModel="overallFormData"
      :formSchemas="formSchemas"
    />
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button type="primary" @click="resetForm">重置</el-button>
  </div>
</template>
<script lang="tsx" setup>
type formType = {
  input: string;
  input1: string;
  select: string;
  datePicker: string;
  radio: string;
  switch: string;
};
const isShow = ref<boolean>(false);
const {
  overallFormRef,
  overallFormData,
  // validate,
  // resetFields,
  clearValidate
} = overallFormHooks<Nullable<formType>>({
  input: "",
  input1: "",
  select: "",
  datePicker: "",
  radio: "",
  switch: null
});
const formSchemas = [
  {
    type: "input",
    label: "输入框",
    model: "input",
    formItem: {
      trigger: "blur",
      validator: (rule: any, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("Please input the password again"));
        } else {
          callback();
        }
      }
    }
  },
  {
    type: "input",
    label: "输入框1",
    model: "input1",
    formItem: {
      trigger: "blur",
      message: "使用",
      required: false
    }
  },
  {
    type: "select",
    label: "下拉框",
    model: "select",
    formItem: {
      trigger: "change"
    },
    component: {
      class: "form-item1",
      clearable: true,
      selectList: [
        {
          label: "Option11",
          value: "label1"
        },
        {
          label: "Option2",
          value: "label2"
        }
      ],
      onChange: () => {
        console.log("112211");
      }
    }
  },
  {
    type: "datetimerange",
    label: "时间输入",
    model: "datePicker"
  },
  {
    type: "radio",
    label: "单选",
    model: "radio",
    component: {
      radioList: [
        {
          label: "1",
          value: "Option 1"
        },
        {
          label: "2",
          value: "Option 21"
        }
      ]
    }
  },
  isShow.value
    ? {
        type: "switch",
        label: "滑块",
        model: "switch"
      }
    : undefined
];

const submitForm = async () => {
  // await validate();
  console.log(overallFormData.value);
};
const resetForm = () => {
  // resetFields();
  clearValidate();
};
</script>
<style lang="scss">
#overallForm {
  .form-item1 {
    width: 100% !important;
  }
}
</style>

<style lang="scss" scoped></style>
