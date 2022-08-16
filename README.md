# Vue 3 + TypeScript + Vite

- 独梦寒风练习vue3构建,如有不足请练习作者指正
- 联系方式 1254442318@qq.com

## 项目使用插件

- vue3
- typescript
- vite
- pinia(替代Vuex)
- router(路由)
- axios(api请求)
- qs
- sass(css)
- element-plus(ui库)
- eslint(页面格式配置)
- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-vue
- js-cookie(cookie)
- nprogress(进度条)
- unplugin-vue-components
- unplugin-auto-impor
- unplugin-vue-define-options

## 自定义组件

- communalDialog 该组件仅适用于通用弹窗即弹窗内没有负责的操作仅有展示提交等功能

    ```html
    <CommunalDialog
        :title="'弹窗1'"
        :width="'50%'"
        :dialogIsShow="dialogIsShow"
        :dialogLoading="dialogLoading"
        @handle-close="handleClose"
        @submit="submit"
    >
        <template #default>我是默认插槽哦</template>
    </CommunalDialog>

    通用弹窗
        #default 默认插槽
        title 弹窗标题
        width 弹窗宽度
        dialogIsShow 是否打开弹窗
        cancelIsShow 是否隐藏取消按钮默认true
        saveIsShow 是否隐藏提交按钮默认true
        submit 提交按钮名字 默认确定
        dialogLoading 提交loading动画
        @handle 取消事件
        @submit 提交事件
    ```

- queryForm 该组件为页面内部通用搜索表单,支持自定义内容,目前内部有输入框,下拉框,时间组件,可根据需求再行添加

    ```html
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
    ```

- tableProBar 该组件为页面通用表格,不支持多级表头,树形表格合并行列等表格

    ```html
    <TableProBar
    ref="Table"
    :tableData="tableData"
    :tableList="tableList"
    :paginationQuery="paginationQuery"
    @sort-change="sortChange"
    @on-selection-change="onSelectionChange"
    @pagination-change="paginationChange"
    />
    表格
    tableData 表格数据
    tableList 列数据
    height 固定表头
    maxHeight 表格流体高度(最大高度)
    headerTemplete 自定义表头
    defaultTemplete 自定义列
    fixed 固定列
    width 列宽度
    minWidth 列最小宽度
    sortable: 排序
    sortChange: 排序点击事件
    onSelectionChange: 多选事件

    分页
    paginationQuery 分页数据
    currentPage 页数
    pageSize 条目数
    pageSizesList 条目数组
    total 总数
    disabled 是否禁用  默认false
    background 是否有背景 默认true
    layout 对齐方式  默认右对齐
    handleCurrentChange  页跳转
    handleSizeChange 条目切换
    paginationChange 分页数据变化传递
    ```
