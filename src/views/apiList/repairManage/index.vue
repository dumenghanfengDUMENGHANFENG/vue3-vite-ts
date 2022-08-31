<template>
  <el-row>
    <el-col :span="24">
      <QueryForm
        :label-width="'80px'"
        :foldIsShow="foldIsShow"
        :foldIndex="foldIndex"
        :queryFormTags="queryFormTags"
        :queryFormObj="queryFormObj"
        :queryFormSelect="queryFormSelect"
      >
        <template #custom>
          <el-button icon="Search" size="large" :loading="loading" type="primary" @click="query">查询</el-button>
        </template>
      </QueryForm>
    </el-col>

    <el-col :span="24">
      <el-button type="primary" size="large" icon="Plus" @click="add">新增</el-button>
      <el-button type="success" size="large" icon="Edit" @click="modify">修改</el-button>
      <el-button type="danger" size="large" icon="Delete" @click="deleteClick">删除</el-button>
    </el-col>
    <el-divider />
    <el-col :span="24">
      <TableProBar
        ref="Table"
        :loading="loading"
        :tableData="tableData"
        :tableList="tableList"
        :paginationQuery="paginationQuery"
        @sort-change="sortChange"
        @on-selection-change="onSelectionChange"
        @pagination-change="paginationChange"
      />
    </el-col>
    <RepairManageForm ref="Form" @repair-manage-list="repairManageList" />
  </el-row>
</template>

<script lang="tsx" setup>
  import { repairManageApis } from '@/api/apiList/repairManage'
  import { QueryForm } from '@/components/queryForm/index'
  import { TableProBar } from '@/components/tableProBar/index'
  import RepairManageForm from './components/form.vue'
  defineOptions({
    name: 'RepairManage'
  })
  const timer = ref<any>([])
  const foldIsShow = true
  const foldIndex = 3
  const loading = ref<boolean>(false)
  const queryFormObj = reactive<{
    sortName?: string | undefined
    sort?: string | undefined
    startTime?: string | undefined
    endTime?: string | undefined
  }>({})
  const queryFormSelect = reactive<{
    eqpId: {
      value: string
      label: string
    }[]
    state: {
      value: string
      label: string
    }[]
  }>({
    eqpId: [],
    state: []
  })
  const queryFormTags = [
    { label: '设备编号', prop: 'eqpId', tag: 'select', clearable: false },
    { label: '当前状态', prop: 'state', tag: 'select', clearable: false },
    { label: '问题描述', prop: 'description', tag: 'input', clearable: false },
    {
      label: '报修时间',
      templete: () => {
        return (
          <el-date-picker
            v-model={timer.value}
            type="datetimerange"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        )
      }
    }
  ]
  const paginationQuery = reactive({
    page: 1,
    size: 10,
    total: 0
  })
  const tableData = ref([])
  const tableList = [
    {
      prop: 'toolingModel',
      label: '型号',
      sortable: 'custom'
    },
    {
      prop: 'toolingType',
      label: '类别'
    },
    {
      prop: 'creator',
      label: '创建人',
      defaultTemplete: (scope: any) => {
        let type = 'primary'
        if (scope.row.creator === 'taijiadmin') {
          type = 'primary'
        } else if (scope.row.creator === 'eng01') {
          type = 'warning'
        } else {
          type = 'danger'
        }
        return <el-link type={type}>{scope.row.creator}</el-link>
      }
    },
    {
      prop: 'createTime',
      label: '创建时间'
    },
    {
      prop: 'editor',
      label: '修改人'
    },
    {
      prop: 'editTime',
      label: '修改时间'
    }
  ]
  queryFormSelect.eqpId = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    }
  ]
  let multipleTable: any[] = []
  repairManageList()
  // 获取列表
  function repairManageList() {
    loading.value = true
    const [startTime, endTime] = timer.value || []
    repairManageApis
      .repairManageList({ ...queryFormObj, ...paginationQuery, startTime, endTime })
      .then((res: any) => {
        tableData.value = res.data
        paginationQuery.total = res.total
        loading.value = false
      })
      .catch((err) => {
        console.log('失败', err)
      })
  }
  //查询
  function query() {
    paginationQuery.page = 1
    repairManageList()
  }
  // 新增
  const Form = ref()
  function add() {
    Form.value.handleOpen()
  }
  // 修改
  function modify() {
    Form.value.handleOpen(multipleTable)
  }
  // 删除
  function deleteClick() {
    ElMessageBox.confirm(`确认删除选中的${multipleTable.length}条数据?`, '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        const ids = multipleTable.map((ele: { id: string }) => {
          return ele.id
        })
        repairManageApis.del({ ids: ids }).then(() => {
          ElNotification({
            title: '删除成功',
            type: 'success'
          })
          repairManageList()
        })
      })
      .catch(() => {})
  }
  // 分页点击
  function paginationChange() {
    repairManageList()
  }
  // 排序点击事件
  function sortChange({ column }: any) {
    queryFormObj.sortName = column.property
    queryFormObj.sort = column.order
    repairManageList()
  }

  // 多选事件
  function onSelectionChange(row: any) {
    multipleTable = row
  }
</script>
