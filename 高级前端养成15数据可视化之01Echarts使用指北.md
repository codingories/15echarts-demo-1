---
title: 高级前端养成15数据可视化之01Echarts使用指北
date: 2020-07-07 20:57:59
tags: 高级前端
---
一. 引入echarts
  - 无webpack/parcel
    - 直接在html引入script src=path/to/echarts.min.js
    - 然后使用全局变量window.echarts
  - 有webpack/parcel
    - yarn add echarts
    - import echarts from 'echarts' 或者 var echarts = require('charts')
    - 然后使用echarts即可
    - 小技巧安装echarts的类型 yarn add @types/echarts

二. 如何学习echarts
  - 使用crm学习

三. webstorm很牛的一个功能
  - 右键local history,show history，给你显示所有的变更

四. 功能
  - 换主题
    - echarts.init(xxx,'dart')
  - webStorm/VSCode技巧
    - 安装@types/echarts加强代码提示
  - 细节配置
    - 如何修改线，提示等
    - 如何查看[术语表](https://echarts.apache.org/zh/cheat-sheet.html)

五.更新数据
  - 再次setOption即可
    - echarts会自动找出差异，并更新图表
    - 使用showLoading()/hideLoading()

六. 点击时间
  - 使用 on 即可
    - 获取dataIndex 和 seriesIndex

七. 移动端适配
  - 常规技巧
    - meta:vp 抄淘宝手机版
    - 用JS获取屏幕宽度设置在div上
    ```
    // 获取屏幕宽度，背下来
    const width = document.documentElement.clientWidth  
    ```
    - 设定款高比
  - echarts提供的功能
    - baseOption + media

八. 前端最好有3个电脑
  - 左边一个放文档，中间放代码，右边放浏览器

九. 如何在Vue中使用echarts
  - 自己封装一个组件即可
    - 看视频演示
  - 也可以搜别人的封装
    - https://github.com/ecomfe/vue-echarts