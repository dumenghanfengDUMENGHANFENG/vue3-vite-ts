// import { defineComponent } from 'vue'
// 判断不同类型进行分配
const setFormItem = (props: Record<string, any>) => {
  switch (props.data.tag) {
    case 'input':
      return Input(props.queryFormObj, props.data)
    case 'select':
      return Select(props.queryFormObj, props.data, props.queryFormSelect)
    case 'treeSelect':
      return treeSelect(props.queryFormObj, props.data, props.queryFormSelect)
    case 'datePicker':
      return datePicker(props.queryFormObj, props.data)
    default:
      return null
  }
}
// 表单值为空时删除新增的为空值
const formBlur = (queryFormObj: Record<string, any>, prop: string) => {
  if (Array.isArray(queryFormObj[prop])) {
    if (queryFormObj[prop].length === 0) {
      delete queryFormObj[prop]
    }
  } else {
    if (queryFormObj[prop] === '') {
      delete queryFormObj[prop]
    }
  }
}
// 输入框
const Input = (form: Record<string, any>, data: Record<string, any>) => {
  return (
    <el-input
      v-model={form[data.prop]}
      placeholder={'请输入' + data.label}
      disabled={data.disabled ? true : false}
      clearable={data.clearable === false ? false : true}
      onBlur={formBlur(form, data.prop)}></el-input>
  )
}
// 选择框
const Select = (form: Record<string, any>, data: Record<string, any>, queryFormSelect: Record<string, any>) => {
  return (
    <el-select
      v-model={form[data.prop]}
      placeholder={'请选择' + data.label}
      disabled={data.disabled ? true : false}
      clearable={data.clearable === false ? false : true}
      filterable={data.filterable ? true : false}
      multiple={data.multiple ? true : false}
      collapse-tags={data.multiple ? true : false}
      onBlur={formBlur(form, data.prop)}>
      {queryFormSelect[data.prop]
        ? queryFormSelect[data.prop].map((item: { value: any; label: string }) => {
            return <el-option key={item.value} label={item.label} value={item.value} />
          })
        : []}
    </el-select>
  )
}
// 树形选择框
const treeSelect = (form: Record<string, any>, data: Record<string, any>, queryFormSelect: Record<string, any>) => {
  return (
    <el-treeSelect
      v-model={form[data.prop]}
      data={queryFormSelect[data.prop]}
      multiple={data.multiple ? true : false}
      filterable={data.filterable ? true : false}
      show-checkbox={data.showCheckbox ? true : false}
      render-after-expand={data.renderAfterExpand}
      clearable={data.clearable === false ? false : true}
      check-strictly
      onBlur={formBlur(form, data.prop)}
    />
  )
}
// 时间选择
const datePicker = (form: Record<string, any>, data: Record<string, any>) => (
  <el-date-picker
    v-model={form[data.prop]}
    disabled={data.disabled ? true : false}
    clearable={data.clearable === false ? false : true}
    type={data.type}
    format={data.format}
    value-format={data.format}
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    onBlur={formBlur(form, data.prop)}
    placeholder={'请选择' + data.label}
  />
)
export default defineComponent({
  name: 'FormItem',
  props: {
    queryFormObj: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => {}
    },
    queryFormSelect: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    return () => setFormItem(props)
  }
})
