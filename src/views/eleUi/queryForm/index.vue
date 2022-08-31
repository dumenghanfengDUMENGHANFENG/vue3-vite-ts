<template>
  <div>
    <div @click="click">点击</div>
    <QueryForm
      :label-width="'80px'"
      :queryFormTags="queryFormTags"
      :queryFormObj="queryFormObj"
      :queryFormSelect="queryFormSelect"
      :foldIsShow="foldIsShow"
      :foldIndex="foldIndex"
    />
  </div>
</template>

<script lang="ts" setup>
  import { QueryForm } from '@/components/queryForm/index'
  import data from './data'
  // import data from './data'
  defineOptions({
    name: 'QueryForm'
  })
  const queryFormTags = data().queryFormTags
  const queryFormObj = data().queryFormObj
  const queryFormSelect = data().queryFormSelect
  const foldIsShow = false
  const foldIndex = 3
  const click = () => {
    console.log(queryFormObj, '1111')
  }
</script>
<style lang="scss" scoped>
  // .queryForm {
  //   display: flex;
  //   align-items: center;
  //   flex-wrap: wrap;
  // }
</style>
