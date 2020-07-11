<template>
  <div>
    <h1>如何在vue中使用echarts</h1>
    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="loadMore">加载更多</button>
  </div>

</template>

<script>
  import VueEcharts from './vue-echarts.vue'
  export default {
    data(){
      return {
        loading: false,
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
    components: {VueEcharts},
    methods: {
      loadMore(){
        this.loading  = true
        setTimeout(()=>{
          this.loading = false
          this.option = {
            xAxis: {
              data: ['2020-1-1','2020-1-2','2020-1-3']
            },
            series: [{
              data: [1,2,3]
            }]
          }
        },3000)
      }
    }
  }
</script>
