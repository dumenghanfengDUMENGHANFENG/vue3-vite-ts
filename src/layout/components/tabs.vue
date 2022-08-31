<template>
  <el-tabs v-model="path" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.name" :name="item.path" />
  </el-tabs>
</template>
<script lang="ts" setup>
  type routerType = {
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

  watch([props], (newValue) => {
    path.value = store.layout.path
    tabsList.value = newValue[0].tabsList
  })
  // 点击tabs
  function tabClick({ paneName }: any) {
    store.layout.modifyPath(paneName)
    router.push({
      path: paneName
    })
  }
  // 删除tabs
  function removeTab(targetName: any | undefined) {
    if (tabsList.value.length !== 1) {
      store.layout.removeTabsList(targetName)
      router.push({
        path: store.layout.path
      })
    }
  }
</script>
