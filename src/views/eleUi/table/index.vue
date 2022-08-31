<template>
  <div>
    {{ name }}
    <div>------------------</div>
    {{ index }}
    <div>------------------</div>
    <div @click="click">点击</div>
    <TableProBar
      ref="Table"
      :tableData="tableData"
      :tableList="tableList"
      :paginationQuery="paginationQuery"
      @sort-change="sortChange"
      @on-selection-change="onSelectionChange"
      @pagination-change="paginationChange"
    />
  </div>
</template>

<script lang="ts" setup>
  import { TableProBar } from '@/components/tableProBar/index'
  import data from './data'
  defineOptions({
    name: 'RepairManage'
  })
  const tableData = [
    {
      name: '测试1',
      address: '江苏',
      address1: '江苏',
      address2: '江苏',
      address3: '江苏',
      address4: '江苏',
      address5: '江苏',
      address6: '江苏'
    },
    {
      name: '测试2',
      address: '苏州'
    },
    {
      name: '测试3',
      address: '无锡'
    },
    {
      name: '测试3',
      address: '上海'
    }
  ]
  const Table = ref(data())
  const name = Table.value.name
  const index = Table.value.index
  const tableList = data().tableList
  let paginationQuery = data().paginationQuery

  function click() {
    console.log(paginationQuery)
    // paginationQuery.pageSize = 20
    // name.value = '888888'
    // index.value = 99999
    // data2.value.index = 999999999
  }
  // 分页点击
  const paginationChange = () => {
    console.log(paginationQuery, '分页点击')
  }
  // 排序点击事件
  const sortChange = (row: any) => {
    console.log(row, '父 排序点击事件')
  }
  // 多选事件
  const onSelectionChange = (row: any) => {
    console.log(row, '父多选事件')
    // Table.value.$refs.TableProBar.toggleRowSelection(row, undefined)
  }
</script>
