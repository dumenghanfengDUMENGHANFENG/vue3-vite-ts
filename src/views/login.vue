<template>
  <div class="login">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item label="帐号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import store from '@/store'
  import type { FormInstance, FormRules } from 'element-plus'
  defineOptions({
    name: 'Login'
  })
  const ruleFormRef = ref<FormInstance>()
  const router = useRouter()
  const ruleForm = reactive({
    username: '',
    password: '',
    loginType: 1
  })
  const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入帐号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  })
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid) => {
      if (valid) {
        store.login
          .loginSignIn(ruleForm)
          .then(() => {
            router.push({
              path: '/workbench'
            })
          })
          .catch(() => {
            store.login.delToken()
            location.reload()
          })
      }
    })
  }
</script>
<style scoped lang="scss">
  .login {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
