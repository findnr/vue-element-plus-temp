<template>
    <div ref="chartRef" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import * as echarts from "echarts";
  import guizhouGeoJson from "./guizhou.json"; // 请确保 guizhou.json 文件在项目 assets 目录下
  
  const chartRef = ref(null);
  let chartInstance = null;
  let currentIndex = 0;
  let intervalId = null;
  
  const data = [
    { name: "贵阳市", value: 350 },
    { name: "遵义市", value: 280 },
    { name: "六盘水市", value: 220 },
    { name: "安顺市", value: 210 },
    { name: "毕节市", value: 260 },
    { name: "铜仁市", value: 180 },
    { name: "黔西南布依族苗族自治州", value: 200 },
    { name: "黔东南苗族侗族自治州", value: 240 },
    { name: "黔南布依族苗族自治州", value: 230 }
  ];
  
  onMounted(() => {
    chartInstance = echarts.init(chartRef.value,'dark');
    
    // 注册贵州省地图
    echarts.registerMap("guizhou", guizhouGeoJson);
  
    const option = {
      title: {
        text: "贵州省数据展示",
        left: "center",
        textStyle: {
          color: "#ffffff"
        }
      },
      darkMode: true, // 强制深色模式
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}"
      },
      visualMap: {
        min: 100,
        max: 400,
        left: "left",
        bottom: "10%",
        text: ["高", "低"],
        inRange: {
          color: ["#e0ffff", "#006edd"]
        },
        textStyle: {
          color: "#ffffff"
        }
      },
      series: [
        {
          type: "map",
          map: "guizhou",
          label: {
            show: true,
            color: "#ffffff",
            backgroundColor: "transparent"
          },
          itemStyle: {
            borderColor: "#444",
            borderWidth: 1,
            areaColor: "#323c48"
          },
          emphasis: {
            itemStyle: {
              areaColor: "#ffa500", // 设置选中的颜色为亮橙色
              borderColor: "#ffa500",
              borderWidth: 2
            }
          },
          data
        }
      ]
    };
  
    chartInstance.setOption(option);
  
    // 自动循环展示
    intervalId = setInterval(() => {
      chartInstance.dispatchAction({
        type: "downplay", // 取消当前高亮
        seriesIndex: 0,
        dataIndex: currentIndex
      });
  
      currentIndex = (currentIndex + 1) % data.length;
  
      chartInstance.dispatchAction({
        type: "highlight", // 高亮新的区域
        seriesIndex: 0,
        dataIndex: currentIndex
      });
  
      chartInstance.dispatchAction({
        type: "showTip", // 显示提示框
        seriesIndex: 0,
        dataIndex: currentIndex
      });
    }, 2000); // 每2秒切换一次
  });
  
  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose();
    }
    if (intervalId) {
      clearInterval(intervalId); // 清除定时器
    }
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 500px;
  }
  </style>
  