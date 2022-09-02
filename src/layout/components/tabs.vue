<template>
  <el-tabs v-model="path" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.meta.title" :name="item.path" />
  </el-tabs>
</template>
<script lang="ts" setup>
  import layoutStore from '@/store/modules/layout'
  type routerType = {
    meta: {
      icon: string
      title: string
    }
    name: string
    path: string
  }[]
  const props = defineProps({
    path: {
      type: String,
      required: true
    },
    tabsList: {
      type: Object as () => routerType,
      required: true
    }
  })

  const router = useRouter()
  const path = ref(props.path)
  const tabsList = ref(props.tabsList)

  onBeforeUpdate(() => {
    path.value = props.path
    tabsList.value = props.tabsList
  })
  // 点击tabs
  function tabClick({ paneName }: any) {
    router.push({
      path: paneName
    })
  }
  // 删除tabs
  function removeTab(targetName: any | undefined) {
    if (tabsList.value.length !== 1) {
      layoutStore().removeTabsList(targetName)
      router.push({
        path: layoutStore().path
      })
    }
  }
</script>
