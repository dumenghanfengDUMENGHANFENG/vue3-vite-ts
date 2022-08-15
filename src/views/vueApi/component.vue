<template>
  <div>
    <!-- <HelloWorld :carr="arr" @coClick="coClick"></HelloWorld> -->
    <HelloWorld v-model:obj="obj" />
    {{ obj }}
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  // import { useStore } from "@/store/modules/app";
  import HelloWorld from '@/components/HelloWorld.vue'

  // interface objTs {
  //   index: number
  //   name: string
  // }
  defineOptions({
    name: 'Components'
  })

  /*
父组件传值子组件 方式

传统传值
父 :carr="arr" 子 defineProps({
  carr: {
    type: Array,
    required: true
  }
})接收或者 defineProps(['carr'])

父组件内嵌N子组件同步处理多个子组件

父 provide('info', 12) 子 inject('info')

v-model 传值 const props = defineProps({
  obj: {
    type: Object,
    required: true
  }
})
 父 v-model:obj="obj"
子组件传值父组件 (修改的值必须为响应数据)

函数式 父组件传值为函数function,子组件同步点击
emits式 父组件@定义,子组件通过const emits = defineEmits(['coClick'])定义, emits('coClick', 10)传值
v-model修改子const emits = defineEmits(['update:obj'])
const clickA = () => {
  console.log('123')
  emits('update:obj', {
    ...props.obj,
    arr1: [10, 30, 5]
  })
}

*/
  const obj = ref({
    carr: [1, 3, 5],
    arr1: [1, 3, 5]
  })
  // const arr = [1, 3, 5]
  // const carr = ref([1, 3, 5])
  // const arr1 = ref([1, 3, 5])
  // const objRef: objTs = {
  //   index: 0,
  //   name: 'Ref'
  // }
  // provide('info', 12)

  // function coClick(item: any) {
  //   console.log(item, '子组件传值')
  // }
</script>

<style scoped></style>
