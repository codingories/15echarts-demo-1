import React, {useEffect, useRef,props} from 'react'
import echarts from 'echarts'

export function ReactEcharts(props){
  const container = useRef(null)
  const chart = useRef(null)
  const {option} = props
  useEffect(()=>{
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width-20}px`
    container.current.style.height = `${(width -20) * 1.2}px`
    chart.current = echarts.init(container.current, 'dark')
  },[]) // mounted 第一次渲染, 空数组第一次渲染，不是空数组每次渲染

  useEffect(()=>{
    chart.current.setOption(option)
  },[option]) // when option changes

  return (<div ref={container}/>)
}
