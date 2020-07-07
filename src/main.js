import echarts from 'echarts'

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main, 'default');
let n = 0
let m = 0

function createKey() {
  n += 1
  return `2020-1-${n}`
}

function createValue() {
  m += 1
  return m
}

// 指定图表的配置项和数据

const xData = [createKey(), createKey(), createKey(), createKey(), createKey(), createKey()]
const values = [createValue(), createValue(), createValue(), createValue(), createValue(), createValue()]
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  title: {
    show: true,
    text: '销量',
    right: 0,
  },
  legend: {
    data: ['金额']
  },
  xAxis: {
    type: 'category',
    data: xData
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    show: true,
  },
  series: [{
    lineStyle: {
      color: 'blue'
    },
    itemStyle: {
      borderWidth: 10
    },
    name: '金额',
    data: values,
    type: 'line'
  }]
});

loadMoreButton.addEventListener('click', () => {
  let key = createKey()
  let value = createValue()
  console.log(key, value)
  myChart.setOption({
    xAxis: {
      data: [...xData,  key]
    },
    series: [{
      data: [...values, value]
    }]
  })

})

