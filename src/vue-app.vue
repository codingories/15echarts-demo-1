<template>
  <div>
    <h1>如何在vue中使用echarts</h1>
    <vue-echarts :option="option"></vue-echarts>
  </div>

</template>

<script>
  import VueEcharts from './vue-echarts.vue'
  export default {
    data(){
      return {
        option: {
          title: {
            show: true,
            text: '销量',
            right: 30,
          },
          legend: {
            data: ['金额']
          },
          xAxis: {
            type: 'category',
            data: ['2020-1-1','2020-1-2']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            show: true,
          },
          series: [{
            name: '金额',
            data: [1,2],
            type: 'line'
          }]
        }
      }
    },
    components: {VueEcharts}
  }
</script>
