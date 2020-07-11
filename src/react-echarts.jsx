import React, {useEffect, useRef} from 'react'
import echarts from 'echarts'

export function ReactEcharts(){
  const container = useRef(null)
  useEffect(()=>{
    console.log(container.current)
  },[]) // mounted 第一次渲染, 空数组第一次渲染，不是空数组每次渲染
  return (<div ref={container}>hello</div>)
}
