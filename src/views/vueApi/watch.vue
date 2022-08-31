<template>
  <div>
    <h1>{{ name }}</h1>
    <h1 v-for="item in list" :key="item.id">
      {{ item.name }}
    </h1>
    <button @click="change">修改</button>
    <h1>{{ nameRef }}</h1>
    <h1>{{ obj }}</h1>
    <h1>{{ name1 }}</h1>
    <button @click="changeRef">修改1</button>
    <!-- <h1>值{{ indexRef }}改变计算属性{{ indexRefName }}</h1> -->
    <!-- <h1>watch</h1>
  <h1>{{ sum }}</h1>
  <button @click="sum++">点击加一</button>
  <br>
  <h1>{{ sumN }}</h1>
  <button @click="sumN += '!'">点击加!</button> -->
  </div>
</template>

<script setup lang="ts">
  // import { reactive, ref, toRef, watch, watchEffect } from 'vue'

  interface objTs {
    index: number
    key: string
  }

  // 使用ref()函数将数据变为响应式数据，返回引用实现的实例对象
  const obj: objTs = {
    index: 1,
    key: '值'
  }
  const obj1 = reactive<objTs>({
    index: 1,
    key: '值'
  })
  // const reactiveName = reactive({
  //   name: 'reactive测试'
  // })
  const name = ref<string>('ref更新')
  const list = ref<
    {
      id: number
      name: string
    }[]
  >([
    {
      id: 123,
      name: '测试1'
    },
    {
      id: 456,
      name: '测试2'
    }
  ])
  const nameRef = '不响应数据'
  const indexRef = ref<number>(0)
  // const indexRefName = computed<number>(() => {
  //   return indexRef.value + 1
  // })
  // console.log(indexRefName)
  const name1 = toRef(obj1, 'key')
  function change() {
    // 修改数据时，使用.value修改
    if (name.value === 'ref更新更改') {
      name.value = 'ref更新'
    } else {
      name.value = 'ref更新更改'
      list.value[0].name = '测试1修改'
    }
  }
  const changeRef = () => {
    indexRef.value++
    console.log(obj1)
    obj1.key = '改变'
    // indexRefName++
  }

  const sum = ref(0)
  const sumN = ref('yes')
  // 监视ref定义的一个响应式数据
  // 第三个参数是监视的配置，可以不写
  watch(
    sum,
    () => {
      // console.log('sum的值变化了', newValue, oldValue)
    },
    { immediate: true }
  )
  // 监视ref定义的多个响应式数据
  // newValue,oldValue是数组形式的值
  watch([sum, sumN], () => {
    // console.log('sum、sumN的值变化了', newValue, oldValue)
  })
  watchEffect(() => {
    // const s = sum.value
    // console.log('sum改变了,变为', s)
  })
</script>

<!-- <script lang="ts">
import { reactive, ref, onMounted, onUpdated } from "vue";
export default {
  name: 'App',
  setup() {
    // 使用ref()函数将数据变为响应式数据，返回引用实现的实例对象
    let name = ref('ref更新')
    function change() {
      // 修改数据时，使用.value修改
      name.value = 'ref更新更改'
      console.log(name)
    }
    const changeRef = () => {
      console.log('changeRef')
    }
    return {
      name,
      change,
      changeRef
    }
  }
}
</script> -->
<style scoped></style>
