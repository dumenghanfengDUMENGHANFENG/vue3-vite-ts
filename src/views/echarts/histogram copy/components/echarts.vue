<template>
  <div>
    <div ref="myChart" :style="{ width: '100%', height: '30vh' }"></div>
    <!-- <div ref="chartDom" :style="{ width: '100%', height: '300px' }"></div> -->
  </div>
</template>

<script setup lang="ts">
  import echarts from '@/utils/echarts/index'
  import { ECOption } from '@/utils/echarts/types.d'
  defineOptions({
    name: 'HistogramEcharts'
  })
  const myChart = shallowRef()
  const resizeFn7 = () => {
    window.addEventListener('resize', () => {
      console.log('2222')
      setTimeout(() => {
        if (myChart) {
          myChart.value!.resize()
        }
      }, 100)
      console.log('2222')
    })
  }
  onMounted(() => {
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
    // myChart.value!.resize()
    resizeFn7()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeFn7)
    console.log('1111')
  })

  //   function option(): ECOption {
  //     // const option: ECOption = {
  //     //   title: {
  //     //     text: 'ECharts 入门示例'
  //     //   },
  //     //   tooltip: {},
  //     //   xAxis: {
  //     //     data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  //     //   },
  //     //   yAxis: {},
  //     //   series: [
  //     //     {
  //     //       name: '销量',
  //     //       type: 'bar',
  //     //       data: [5, 20, 36, 10, 10, 20]
  //     //     }
  //     //   ]
  //     // }
  //     return {
  //       title: {
  //         text: 'ECharts 入门示例'
  //       },
  //       tooltip: {
  //         trigger: 'axis'
  //       },
  //       xAxis: {
  //         data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: '销量',
  //           type: 'bar',
  //           data: [5, 20, 36, 10, 10, 20]
  //         }
  //       ]
  //     }
  //   }
</script>

<style scoped lang="scss"></style>
