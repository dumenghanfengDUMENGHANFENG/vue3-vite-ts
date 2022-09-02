<template>
  <div class="header-right">
    <div class="fullScreen" @click="fullScreen">{{ name }}</div>
    <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
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
  import screenfull from 'screenfull'
  import loginStore from '@/store/modules/login'
  import layoutStore from '@/store/modules/layout'
  defineOptions({
    name: 'Dropdown'
  })
  const router = useRouter()
  const username = loginStore().username
  const name = ref('全屏')
  // 全屏
  function fullScreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
    if (screenfull.isFullscreen) {
      name.value = '全屏'
    } else {
      name.value = '还原'
    }
  }
  // 退出登录
  function LogOut() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        loginStore()
          .logOut()
          .then(() => {
            loginStore().logOut()
            layoutStore().reset()
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
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    .dropdown {
      margin-left: 5px;
      height: 30px;
      .el-tooltip__trigger {
        line-height: 30px;
      }
    }
    .fullScreen {
      color: var(--el-text-color-regular);
      font-size: var(--el-font-size-base);
      margin-right: 10px;
    }
  }
</style>
