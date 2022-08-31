import { defineComponent, ref } from 'vue'
const props = {
  // 表格数据
  tableData: {
    type: Array,
    default: () => {
      return []
    }
  },
  // 列数据
  tableList: {
    type: Array,
    default: () => {
      return []
    }
  },
  // 固定表头
  height: {
    type: String
  },
  // 固定表头
  maxHeight: {
    type: String
  },
  paginationQuery: {
    type: Object,
    default: () => {
      return {}
    }
  }
}
/**
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
**/
export default defineComponent({
  name: 'TableProBar',
  props,
  emits: ['sortChange', 'onSelectionChange', 'paginationChange'],
  setup(props, { emit }) {
    // 排序点击事件
    const sortChange = (row: any) => emit('sortChange', row)
    // 多选事件
    const onSelectionChange = (row: any) => emit('onSelectionChange', row)

    // 分页处理
    const paginationQuery = ref(props.paginationQuery)
    // 页跳转
    const handleCurrentChange = (val: number) => {
      paginationQuery.value.currentPage = val
      emit('paginationChange')
    }
    // 条目切换
    const handleSizeChange = (val: number) => {
      paginationQuery.value.pageSize = val
      emit('paginationChange')
    }
    return () => (
      <>
        <el-table
          ref="TableProBar"
          data={props.tableData}
          height={props.height}
          max-height={props.maxHeight}
          stripe
          border
          onSortChange={sortChange}
          onSelectionChange={onSelectionChange}
          style={{ width: '100%' }}>
          <el-table-column type="selection" width="55" />
          <el-table-column align="center" width="60" label="序号" type="index" />
          {props.tableList.map((item: any) => {
            return (
              <el-table-column
                v-slots={{
                  default: item.defaultTemplete ? (scope: any) => item.defaultTemplete(scope) : null,
                  header: item.headerTemplete ? (scope: any) => item.headerTemplete(scope) : null
                }}
                prop={item.prop}
                label={item.label}
                width={item.width}
                minWidth={item.minWidth}
                sortable={item.sortable}
                fixed={item.fixed}></el-table-column>
            )
          })}
        </el-table>
        <el-pagination
          style={{
            padding: '16px 0px'
          }}
          v-model:currentPage={paginationQuery.value.currentPage}
          v-model:page-size={paginationQuery.value.pageSize}
          page-sizes={paginationQuery.value.pageSizesList ? paginationQuery.value.pageSizesList : [10, 20, 30, 40, 50]}
          total={paginationQuery.value.total}
          disabled={paginationQuery.value.disabled ? paginationQuery.value.disabled : false}
          background={paginationQuery.value.background === false ? paginationQuery.value.background : true}
          layout={
            paginationQuery.value.layout ? paginationQuery.value.layout : '->,total, sizes, prev, pager, next, jumper'
          }
          onSize-change={handleSizeChange}
          onCurrent-change={handleCurrentChange}
        />
      </>
    )
  }
})
