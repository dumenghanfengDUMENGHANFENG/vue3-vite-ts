<template>
  <el-dialog
    v-model="dialogVisible"
    title="表单"
    width="50%"
    :before-close="handleClose"
    modal
    :close-on-click-modal="false"
  >
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon>
      <el-form-item label="型号" prop="toolingModel">
        <el-input v-model="ruleForm.toolingModel" />
      </el-form-item>
      <el-form-item label="类别" prop="toolingType">
        <el-select style="width: 100%" v-model="ruleForm.toolingType" placeholder="请选择">
          <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.name" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="large" @click="handleClose()">
          <CircleClose style="width: 1em; height: 1em; margin-right: 8px" />
          取消
        </el-button>
        <el-button type="primary" size="large" @click="submit()">
          <Pointer style="width: 1em; height: 1em; margin-right: 8px" />保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import type { FormInstance, FormRules } from 'element-plus'
  import { repairManageApis } from '@/api/apiList/repairManage'
  defineOptions({
    name: 'RepairManageForm'
  })
  defineExpose({ handleOpen }) //抛出子组件方法
  const emits = defineEmits(['repairManageList'])
  const { t } = useI18n()

  const ruleFormRef = ref<FormInstance>()
  const ruleForm = ref<{ id?: string; toolingModel: string; toolingType: string }>({
    toolingModel: '',
    toolingType: ''
  })
  const rules = reactive<FormRules>({
    toolingModel: [{ required: true, message: '请输入型号', trigger: 'blur' }],
    toolingType: [
      {
        required: true,
        message: '请选择类别',
        trigger: 'change'
      }
    ]
  })
  const dialogVisible = ref(false)
  // 打开弹窗
  function handleOpen(item?: any) {
    dialogVisible.value = true
    if (item) {
      nextTick(() => {
        ruleForm.value = item[0]
      })
    }
    getToolingTypeList()
  }
  // 保存弹窗
  const submit = async () => {
    await ruleFormRef.value!.validate((valid) => {
      if (valid) {
        if (ruleForm.value.id) {
          repairManageApis.edit({ ...ruleForm.value }).then((res: any) => {
            ElNotification({
              title: t(`${res.message}`),
              type: 'success'
            })
            ruleFormRef.value!.resetFields()
            emits('repairManageList')
            dialogVisible.value = false
          })
        } else {
          repairManageApis.add({ ...ruleForm.value }).then((res: any) => {
            ElNotification({
              title: t(`${res.message}`),
              type: 'success'
            })
            ruleFormRef.value!.resetFields()
            emits('repairManageList')
            dialogVisible.value = false
          })
        }
      }
    })
  }
  //   关闭弹窗
  const handleClose = () => {
    ruleFormRef.value!.resetFields()
    dialogVisible.value = false
  }
  //类别列表
  const typeList = ref<
    {
      id: string
      name: string
    }[]
  >([])
  // 获取类别
  const getToolingTypeList = async () => {
    await repairManageApis
      .GetToolingTypeList()
      .then((res: any) => {
        typeList.value = res.data
      })
      .catch((err) => {
        console.log('失败', err)
      })
  }
</script>

<style scoped></style>
