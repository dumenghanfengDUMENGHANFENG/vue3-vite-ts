<template>
  <el-dialog
    :title="props.title"
    :width="props.width"
    :before-close="handleClose"
    :model-value="props.dialogIsShow"
    modal
    :close-on-click-modal="false"
  >
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="large" @click="handleClose" v-if="props.cancelIsShow">
          <CircleClose style="width: 1em; height: 1em; margin-right: 8px" />
          取消
        </el-button>
        <el-button type="primary" size="large" v-if="props.saveIsShow" :loading="props.dialogLoading" @click="submit">
          <Pointer style="width: 1em; height: 1em; margin-right: 8px" />{{ props.submit }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<!--
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
 -->
<script setup lang="ts">
  defineOptions({
    name: 'CommunalDialog'
  })
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    submit: {
      type: String,
      required: false, //必填
      default: '确定' //默认值
    },
    dialogIsShow: {
      type: Boolean,
      required: true
    },
    dialogLoading: {
      type: Boolean,
      required: true
    },
    cancelIsShow: {
      type: Boolean,
      required: false,
      default: true
    },
    saveIsShow: {
      type: Boolean,
      required: false,
      default: true
    }
  })
  const emits = defineEmits(['handleClose', 'submit'])
  // function handleClose() {
  //   emits('handleClose', false)
  // }
  // function submit() {
  //   emits('submit', true)
  // }
  const handleClose = () => {
    emits('handleClose', false)
  }
  const submit = () => {
    emits('submit', true)
  }
</script>

<style scoped></style>
