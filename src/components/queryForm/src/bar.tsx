import FormItem from './formItem'
const props = {
  queryFormTags: {
    type: Array,
    default: () => []
  },
  queryFormObj: {
    type: Object,
    default: () => {}
  },
  queryFormSelect: {
    type: Object,
    default: () => {}
  },
  labelWidth: {
    type: String,
    default: '120px'
  },
  foldIsShow: {
    type: Boolean,
    default: false
  },
  foldIndex: {
    type: Number,
    default: 0
  }
}
/**
 <QueryForm
    :label-width="'80px'"
    :queryFormTags="queryFormTags"
    :queryFormObj="queryFormObj"
    :queryFormSelect="queryFormSelect"
    :foldIsShow="foldIsShow"
    :foldIndex="foldIndex"
  />

 搜索表单
    若有默认值回填则取消清空按钮否则默认有清空
    当清空时默认删除表单对象中的属性
  Input 输入框
  Select 选择框
  treeSelect 树形选择框
  datePicker 时间选择
 上述所需值可根据element文档进行修改
 labelWidth 表单label宽度
 queryFormTags 表单label值每一项类型
   clearable 是否可清空 默认true
   disabled 是否禁用 默认false
   下拉框
     filterable 查询
     multiple 多选
   树形选择框
     show-checkbox 展示样式checkbox样式 默认false
 queryFormObj 表单回填值
 queryFormSelect 表单下拉框数组

 foldIsShow 是否开启展开按钮
 foldIndex 几条数据后开启展开按钮
 showCollapse 展开/收起
**/
export default defineComponent({
  name: 'QueryForm',
  props,
  setup(props, { slots }) {
    const showCollapse = ref<boolean>(true)
    const foldIndexNew: number = props.foldIsShow ? props.foldIndex : props.queryFormTags.length
    let interceptList = props.queryFormTags.slice(0, foldIndexNew)
    // 展开点击
    const showCollapseClick = () => {
      if (showCollapse.value) {
        interceptList = [...interceptList, ...props.queryFormTags.slice(foldIndexNew, props.queryFormTags.length)]
        showCollapse.value = false
      } else {
        interceptList = props.queryFormTags.slice(0, foldIndexNew)
        showCollapse.value = true
      }
    }
    return () => (
      <>
        <el-form inline={true} model={props.queryFormObj} label-width={props.labelWidth ? props.labelWidth : '120px'}>
          {/* 内容 */}
          {interceptList.map((item: any) => {
            return item.templete ? (
              <el-form-item
                v-slots={{
                  default: () => item.templete()
                }}
                label={item.label}></el-form-item>
            ) : (
              <el-formItem label={item.label} label-width={item.width ? item.width : ''}>
                <FormItem
                  queryFormObj={props.queryFormObj}
                  data={item}
                  queryFormSelect={props.queryFormSelect}></FormItem>
              </el-formItem>
            )
          })}
          {/* 自定义插槽 */}
          {slots.custom
            ? slots.custom().map((customItem) => {
                return <el-formItem>{customItem}</el-formItem>
              })
            : ''}
          {/* 展开/收起 */}
          {props.foldIsShow && props.foldIndex !== props.queryFormTags.length ? (
            showCollapse.value ? (
              <el-formItem>
                <span onClick={showCollapseClick} style="cursor: pointer;">
                  <span
                    style={{
                      fontSize: '18px',
                      color: '#409EFC',
                      marginRight: '5px'
                    }}>
                    展开
                  </span>
                  <el-icon color="#409EFC">
                    <arrowDownBold />
                  </el-icon>
                </span>
              </el-formItem>
            ) : (
              <el-formItem>
                <span onClick={showCollapseClick} style="cursor: pointer;">
                  <span
                    style={{
                      fontSize: '18px',
                      color: '#409EFC',
                      marginRight: '5px'
                    }}>
                    收起
                  </span>
                  <el-icon color="#409EFC">
                    <arrowUpBold />
                  </el-icon>
                </span>
              </el-formItem>
            )
          ) : (
            ''
          )}
        </el-form>
      </>
    )
  }
})
