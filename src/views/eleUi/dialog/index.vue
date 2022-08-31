<template>
  <div>
    <el-button text @click="buttonClick">点击弹窗</el-button>
    <CommunalDialog
      :title="'弹窗1'"
      :width="'50%'"
      :dialogIsShow="dialogIsShow"
      :dialogLoading="dialogLoading"
      @handle-close="handleClose"
      @submit="submit"
    >
      <!-- :submit="'提交'" -->
      <template #default>我是默认插槽哦</template>
    </CommunalDialog>
  </div>
</template>

<script lang="ts" setup>
  import CommunalDialog from '@/components/communalDialog/index.vue'
  defineOptions({
    name: 'Dialog'
  })
  const dialogIsShow = ref<boolean>(false)
  const dialogLoading = ref<boolean>(false)

  const buttonClick = () => {
    dialogIsShow.value = true
  }
  const handleClose = (isShow: boolean) => {
    dialogIsShow.value = isShow
  }
  const submit = (isShow: boolean) => {
    dialogLoading.value = isShow
    setTimeout(function () {
      dialogLoading.value = false
      dialogIsShow.value = false
    }, 2000)
  }
</script>
