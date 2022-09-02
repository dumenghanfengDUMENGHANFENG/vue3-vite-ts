<template>
  <div ref="myChart" id="main" :style="{ width: '100%', height: '30vh' }"></div>
</template>

<script setup lang="ts">
  import echarts from '@/utils/echarts/index'
  import { lineType } from '@/utils/echarts/types.d'
  const myChart = shallowRef()
  const resizeName = () => {
    myChart.value!.resize()
  }
  onMounted(() => {
    echarts1()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeName)
  })
  function echarts1() {
    const option: lineType = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
    myChart.value = echarts.init(myChart.value!)
    myChart.value.setOption(option)
    myChart.value!.resize()
    // 根据页面大小自动响应图表大小
    window.addEventListener('resize', resizeName)
  }
</script>

<style scoped lang="scss"></style>
