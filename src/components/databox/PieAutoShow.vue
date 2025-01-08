<!--
 * @Author: findnr
 * @Date: 2023-09-05 11:18:12
 * @LastEditors: findnr
 * @LastEditTime: 2024-11-14 10:22:30
 * @Description: 
-->
<template>
    <div ref="chartRef" style="width: 98%; height: 98%;"></div>
    <div v-if="showDialog" class="dialog-overlay" @click.self="closeDialog" >
      <div class="dialog-content" style="height:300px;width:90%;overflow:auto;background:#EEEEEE;text-align: left;">
        <h5 style="color:red;">{{dialogData.name}}</h5>
        <p v-for="(v,i) in listData" :key="i">{{v.u_name}}</p>
        <button @click="closeDialog">关闭</button>
      </div>
    </div>
</template>
  
  <script setup>
  import {unit} from "../../api/home.js"
  import * as echarts from "echarts";
  
  const chartRef = ref(null);
  let chartInstance = null;

  const showDialog = ref(false);  // 控制弹出框显示
  const dialogData = ref({ name: '', value: 0 });  // 弹出框内容
  
  const data = [
          { value: 25, name: '法人单位',id:1 },
          { value: 205, name: '勘测单位',id:2 },
          { value: 268, name: '设计单位',id:3},
          { value: 333, name: '咨询单位' ,id:4},
          { value: 1016, name: '施工单位',id:5 },
          { value: 273, name: '监理单位',id:7 },
          { value: 103, name: '质量检测单位',id:6 },
          { value: 333, name: '招标代理单位',id:8 },
          { value: 611, name: '供货单位',id:9 },
          { value: 122, name: '机械制造单位' ,id:14}
        ];
  const totalNum=ref(0);
  data.forEach(v => {
      totalNum.value=totalNum.value+v.value
  });
  const option = {
    title: {
        // top: 10,
        text: "市场主体单位（总计："+totalNum.value+"家）",
        textStyle: {
        fontSize: 14
         // fontWeight: 'bold',
         // color: 'red'
        }
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(50, 50, 50, 0.7)",
      textStyle: {
        color: "#ffffff"
      }
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data,
        color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"], // 使用更丰富的颜色方案
        labelLine: {
          show: true, // 显示标线
          lineStyle: {
            color: "#ffffff" // 标线颜色
          }
        },
        itemStyle: {
          borderColor: "#333333",  // 为扇区设置深色边框
          borderWidth: 1
        }
      }
    ]
  };
  let tempFun='';
  let temp=0;
  const listData=ref([]);
  onMounted(() => {
    chartInstance = echarts.init(chartRef.value,"dark");
    chartInstance.setOption(option);
  
    let currentIndex = 0;
    tempFun =()=>{
      chartInstance.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentIndex
      });
      currentIndex = (currentIndex + 1) % data.length;
      chartInstance.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: currentIndex
      });
      chartInstance.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: currentIndex
      });
    }
    temp=setInterval(tempFun, 2000);
    chartInstance.on('click', (params) => {
      clearInterval(temp);
      // unit('index',{id:params.data.id},false).then(res=>{
      //   if(res.code==200){
      //     listData.value=res.data
      //   }
      // });
      dialogData.value = { name: params.name, value: params.value };  // 设置弹出框内容
      showDialog.value = true;  // 显示弹出框
    });
    
  });
  const closeDialog = () => {
      showDialog.value = false;  // 关闭弹出框
      temp=setInterval(tempFun, 2000);
    };
  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.dispose();
    }
  });
  </script>
  
  <style scoped>
  /* 弹出框样式 */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.dialog-content h3 {
  margin: 0 0 10px;
}

.dialog-content button {
  margin-top: 15px;
  padding: 8px 16px;
  cursor: pointer;
}
  </style>