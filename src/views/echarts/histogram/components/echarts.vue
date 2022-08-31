<template>
  <div ref="myChart" id="main" :style="{ width: '100%', height: '30vh' }"></div>
</template>

<script setup lang="ts">
  import echarts from '@/utils/echarts/index'
  import { ECOption } from '@/utils/echarts/types.d'
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
    const option: ECOption = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
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
