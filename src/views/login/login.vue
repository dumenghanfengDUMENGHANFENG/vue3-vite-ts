<template>
  <div class="login">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="帐号" prop="accounts">
        <el-input v-model="ruleForm.accounts" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          class="button"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="reset()"
          >清空</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { LoginApis } from "@/apis/login";
const router = useRouter();
const store = loginStore();
const { loginObj } = storeToRefs(store);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  accounts: "admin",
  password: "123456"
  // accounts: "",
  // password: ""
});

const rules = reactive<FormRules>({
  accounts: [{ required: true, message: "请输入帐号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});
const reset = () => {
  layoutStore().reset();
  delToken();
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (!valid) return;
    LoginApis.login()
      .then((res: any) => {
        loginObj.value = res.data;
        setToken(res.data.token, 3);
        router.push({
          path: "/"
        });
      })
      .catch((err: any) => {
        console.log("失败", err);
      });
  });
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 500px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  .button {
    width: 100%;
  }
}
</style>
