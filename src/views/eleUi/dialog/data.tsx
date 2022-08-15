import { ref, reactive } from 'vue'
const data = {
  name: ref('name'),
  index: 1,
  paginationQuery: reactive({
    currentPage: 1,
    pageSize: 10,
    total: 400
  }),
  tableList: [
    {
      prop: 'name',
      label: '名字',
      type: 'index',
      minWidth: '420px',
      headerTemplete: (scope: any) => {
        return (
          <div>
            {scope.column.label}
            <el-icon>
              <timer />
            </el-icon>
          </div>
        )
      },
      defaultTemplete: (scope: any) => {
        return <div>{scope.row.name}自定义</div>
      }
    },
    {
      prop: 'address',
      label: '地址',
      sortable: 'custom',
      defaultTemplete: (scope: any) => {
        return (
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{scope.row.address}</span>
          </div>
        )
      }
    },
    {
      prop: 'address1',
      label: '地址1',
      width: '220px'
    },
    {
      prop: 'address2',
      label: '地址2',
      width: '220px',
      defaultTemplete: () => {
        return (
          <el-button
            type="primary"
            onClick={() => {
              data.name.value = '1111'
              data.index = 99999
            }}>
            编辑
          </el-button>
        )
      }
    },
    {
      prop: 'address3',
      label: '地址3',
      width: '220px'
    },
    {
      prop: 'address4',
      label: '地址4',
      width: '220px'
    },
    {
      prop: 'address5',
      label: '地址5'
    },
    {
      prop: 'address6',
      label: '地址6',
      fixed: 'right',
      defaultTemplete: () => {
        return (
          <el-button
            type="primary"
            onClick={() => {
              console.log(data)
            }}>
            编辑
          </el-button>
        )
      }
    }
  ]
}
export default data
