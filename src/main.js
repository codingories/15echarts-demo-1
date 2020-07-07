import echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {

  tooltip: {},
  legend: {
    data:['Bug数']
  },
  xAxis: {
    data: ["小张","小王","老王","小吴"]
  },
  yAxis: {},
  series: [{
    name: 'Bug数',
    type: 'bar',
    data: [5, 20, 36, 10]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
