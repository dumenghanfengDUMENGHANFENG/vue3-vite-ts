<template>
  <el-form
    ref="overallFormRef"
    :model="formModel"
    :rules="rules"
    label-width="120px"
    :inline="inline || false"
    :label-position="labelPosition || 'right'"
    :size="size || 'default'"
  >
    <el-form-item
      v-for="item in formSchemas"
      :key="item?.model"
      :label="item?.label"
      :prop="item?.model"
    >
      <component
        class="form-item"
        :is="formType[item?.type as string]"
        :placeholder="
          (item?.type === 'select' ? '请选择' : '请输入') + item?.label
        "
        v-model="formModel[item?.model as string]"
        v-bind="item?.component"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import overallInput from "../overall-input/overall-input.vue";
import overallSelect from "../overall-select/overall-select.vue";
import overallDatePicker from "../overall-date-picker/overall-date-picker.vue";
import overallRadio from "../overall-radio/overall-radio.vue";
import overallSwitch from "../overall-switch/overall-switch.vue";

type componentType = {
  [key: string]: string | boolean | Array<any> | (() => void) | undefined;
};
type formType = {
  type: string;
  label: string;
  model: string;
  class?: string;
  component?: componentType;
  formItem?: {
    required?: boolean;
    message?: string;
    trigger?: string;
    validator?: any;
  };
};
type PropsType = {
  formModel: any;
  inline?: boolean;
  labelPosition?: "left" | "right" | "top";
  size?: "large" | "default" | "small";
  formSchemas: Array<formType | undefined>;
};
const overallFormRef = ref<FormInstance>();
const props = defineProps<PropsType>();
// 组件类型
const formType: { [key: string]: any } = {
  input: overallInput,
  select: overallSelect,
  datetimerange: overallDatePicker,
  radio: overallRadio,
  switch: overallSwitch
};
// 表单v-model
const formModel = computed(() => props.formModel);
// 表单必填项
const rules = reactive<FormRules>(
  Object.fromEntries(
    props.formSchemas
      .filter((item?: formType) => item?.formItem)
      .map((ele?: formType) => {
        const rulesObj = ele?.formItem?.validator
          ? {
              trigger: ele?.formItem?.trigger,
              validator: ele.formItem?.validator
            }
          : {
              ...ele?.formItem,
              trigger: ele?.formItem?.trigger,
              message:
                ele?.formItem?.message ||
                (ele?.type === "select" ? "请选择" : "请输入") + ele?.label,
              required: ele?.formItem?.required || true
            };
        return [ele?.model, rulesObj];
      })
  )
);
defineExpose({ overallFormRef });
</script>
<style lang="scss" scoped>
.form-item {
  width: 100%;
}
</style>
