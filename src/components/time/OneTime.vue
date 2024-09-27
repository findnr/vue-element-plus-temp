<!--
 * @Author: findnr
 * @Date: 2024-09-24 16:06:54
 * @LastEditors: findnr
 * @LastEditTime: 2024-09-26 15:59:13
 * @Description: 
-->
<template>
    <div class="demo-datetime-picker">
        <div class="block">
            <el-date-picker
                v-model="time"
                type="datetime"
                placeholder="请选择时间"
                @change="timeChange"
            />
        </div>
    </div>
  </template>
  
  <script setup>
  const emits=defineEmits(['sedTime'])
  const time=ref();
  const timeObj=reactive({time:0})
  const timeChange=()=>{
      if(time.value == null) return;
      timeObj.time= Date.parse(new Date(time.value).toString())/1000
      emits('sedTime',timeObj);
  }
  const getTimeObj=()=>{
    return timeObj;
  }
  defineExpose({getTimeObj});
  </script>
  
  <style scoped lang="scss">
  
  .index{}
  
  </style>
  