import React, {useEffect, useRef} from 'react'
import echarts from 'echarts'

export function ReactEcharts(){
  const container = useRef(null)
  const chart = useRef(null)
  useEffect(()=>{
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width-20}px`
    container.current.style.height = `${(width -20) * 1.2}px`
    chart.current = echarts.init(container.current, 'dark')
  },[]) // mounted 第一次渲染, 空数组第一次渲染，不是空数组每次渲染
  return (<div ref={container}/>)
}
