<template>
  <h1>组件</h1>
  <button @click="clickA">组件点击</button>
</template>
<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  // onMounted(() => {
  //   console.log('11111')
  // })
  defineOptions({
    name: 'HelloWorld'
  })
  // const info = inject('info')

  // const props = defineProps(['foo'])
  // const props = defineProps({
  //   carr: {
  //     type: Array,
  //     required: true
  //   },
  //   arr1: {
  //     type: Array,
  //     required: true
  //   }
  // })
  const props = defineProps({
    obj: {
      type: Object,
      required: true
    }
  })
  // console.log(props.obj)
  // const emits = defineEmits(['coClick'])
  // const emits = defineEmits(['update:arr1'])
  // console.log(props)
  // function clickA() {
  //   // emits('coClick', 10)
  //   emits('update:arr1', [2, 4, 6])
  // }
  //update:modelValue 是v-model的固定搭配
  // const emits = defineEmits(['update:obj'])
  // const clickA = () => {
  //   console.log('123')
  //   emits('update:obj', {
  //     carr: [10, 30, 5],
  //     arr1: [10, 30, 5]
  //   })
  // }
  const emits = defineEmits(['update:obj'])
  const clickA = () => {
    console.log('123')
    emits('update:obj', {
      ...props.obj,
      arr1: [10, 30, 5]
    })
  }
</script>

<style scoped></style>
