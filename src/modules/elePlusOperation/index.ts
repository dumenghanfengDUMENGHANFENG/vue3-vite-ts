import type { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/*
该导入为了适配tsx做的,正常.vue的不用搞vite的就行了
*/
import {
  ElInput,
  ElSelect,
  ElOption,
  ElTreeSelect,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElIcon,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElCheckbox
} from 'element-plus'
/*
日你妈饿了么这么坑
劳资自动导入还尼玛要自己按需导入需要的尼玛的tsx不能用必须自己导入
自定义指令css需要单独引入,vite的自动导入样式找不到自定义指令的
*/
import { vLoading } from 'element-plus/es/components/loading/src/directive'
// import 'element-plus/es/components/loading/style/css'
// import 'element-plus/es/components/table/style/css'
// import 'element-plus/es/components/table-column/style/css'
const components: {
  [propName: string]: Component
} = {
  ElInput,
  ElSelect,
  ElOption,
  ElTreeSelect,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElIcon,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElCheckbox
}

const elePlusOperation = (app: App<Element>) => {
  // 全局注册element通用组件
  for (const componentItme in components) {
    app.component(componentItme, components[componentItme])
  }
  // 全局导入icon图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  // 自定义指令v-loading
  app.directive('loading', vLoading)
}
export default elePlusOperation
