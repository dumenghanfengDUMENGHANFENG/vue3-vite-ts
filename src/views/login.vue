<template>
  <div class="login">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px">
      <el-form-item :label="$t(`login.accounts`)" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item :label="$t(`login.password`)" prop="password">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="中/英文">
        <el-select v-model="ruleForm.lang" @change="changeLang">
          <el-option
            v-for="item in langList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  // import { useI18n } from 'vue-i18n'
  import { FormInstance, FormRules } from 'element-plus'
  defineOptions({
    name: 'Login'
  })
  const { t, locale } = useI18n()
  const ruleFormRef = ref<FormInstance>()
  const router = useRouter()
  const ruleForm = reactive({
    username: '',
    password: '',
    loginType: 1,
    lang: 'zh'
  })
  const langList = reactive([
    {
      value: 'zh',
      label: '中文',
      disabled: true
    },
    {
      value: 'en',
      label: '英文',
      disabled: false
    }
  ])
  const rules = reactive<FormRules>({
    username: [{ required: true, message: `${t('PleaseEnter')}${t('login.accounts')}`, trigger: 'blur' }],
    password: [{ required: true, message: `${t('PleaseEnter')}${t('login.password')}`, trigger: 'blur' }]
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
  // 国际化(项目没要求直接中文)
  const lang = sessionStorage.getItem('lang') || 'zh'
  if (lang) {
    langList.forEach((ele) => (ele.disabled = false))
    langList[langList.findIndex((ele) => ele.value === lang)].disabled = true
    ruleForm.lang = lang
  }
  const changeLang = (value: string) => {
    ElMessageBox.confirm('确定切换语言吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        langList.forEach((ele) => (ele.disabled = false))
        langList[langList.findIndex((ele) => ele.value === value)].disabled = true
        locale.value = value
        sessionStorage.setItem('lang', value)
      })
      .catch(() => {})
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
