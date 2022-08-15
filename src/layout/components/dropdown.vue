<template>
  <div class="header-right">
    <el-icon :size="30"><User /></el-icon>
    <el-dropdown class="dropdown" size="large" trigger="click">
      <span>
        {{ username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="LogOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
  import store from '@/store'
  import { ElMessageBox } from 'element-plus'
  import { useRouter } from 'vue-router'
  defineOptions({
    name: 'Dropdown'
  })
  const router = useRouter()
  const username = store.login.username
  function LogOut() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        store.login
          .logOut()
          .then(() => {
            store.login.logOut()
            store.layout.reset()
            router.push({
              path: '/login'
            })
          })
          .catch((err) => {
            console.log(err, '退出登录报错')
          })
      })
      .catch(() => {})
  }
</script>

<style scoped lang="scss">
  .header-right {
    margin-right: 15px;
    cursor: pointer;
    .dropdown {
      margin-left: 5px;
      height: 30px;
      .el-tooltip__trigger {
        line-height: 30px;
      }
    }
  }
</style>
