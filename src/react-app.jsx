import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ReactEcharts} from "./react-echarts"

export function ReactApp() {
  const [option, setOption] = useState(
    {
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
  )
  const [loading, setLoading] = useState(false)
  const onClick = ()=> {

    if(loading){
      return
    }

    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setOption({
        xAxis: {
          data: ['2020-1-1','2020-1-2','2020-1-3']
        },
        series: [{
          data: [1,2,3]
        }]
      })
    },3000)
  }
  return (
    <div>
      <h1>我来在React里面使用Echarts</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>点击加载更多</button>
    </div>
  )
}
