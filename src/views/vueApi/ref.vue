<template>
  <div>
    <h1>ref</h1>
    <h1>{{ msg1 }}</h1>
    <h1>{{ objRef }}</h1>
    <h1>{{ msg4 }}</h1>
    <h1>{{ objToRef1 }}</h1>
    <button @click="changeRef">修改ref</button>
    <h1>toRef</h1>
    <h1>{{ msg2 }}</h1>
    <h1>{{ objToRef }}</h1>
    <h1>{{ msg3 }}</h1>
    <h1>{{ objToRef1 }}</h1>
    <button @click="changeToRef">修改toRef</button>
  </div>
</template>

<script setup lang="ts">
  // import { ref, toRef } from 'vue'

  interface objTs {
    index: number
    name: string
  }

  /*
ref ,toRef都是将值声明为响应式的方法
ref:将值变为响应式,实施变更
若直接声明,修改必须使用.value
若是继承非响应式数据,
改动值不变更父级数据,
值变动页面视图刷新变更,
本身变动不影响父级,
即使父级是响应式数据,
改动本身只限于本身
toRef:将值变为响应式,但与ref不同的事他是可以将值与某一个对象的值进行绑定
若父级是响应式数据修改值会同步变更父级数据,并且页面视图变更
若父级非响应式只会变更本身和父级数据值不变
*/
  const objRef: objTs = {
    index: 0,
    name: 'Ref'
  }
  const objRef1 = ref<objTs>({
    index: 0,
    name: 'Ref'
  })
  const objToRef: objTs = {
    index: 1,
    name: 'toRef'
  }
  const objToRef1 = ref<objTs>({
    index: 1,
    name: 'toRef'
  })
  const msg1 = ref(objRef.name)
  const msg4 = ref(objRef1.value.name)
  const msg2 = toRef(objToRef, 'name')
  const msg3 = toRef(objToRef1.value, 'name')
  function changeRef() {
    // msg1.value = 'Ref变更'
    msg4.value = 'Ref变更'
    console.log(objRef1)
  }
  function changeToRef() {
    // msg2.value = 'objToRef变更'
    // objToRef.name = 'objToRef变更'  //数据更新视图不更新
    msg3.value = 'objToRef变更'
    console.log(msg3.value)
    console.log(objToRef1)
  }
</script>

<style scoped></style>
