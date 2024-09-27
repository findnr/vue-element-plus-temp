<!--
 * @Author: findnr
 * @Date: 2024-09-24 16:06:54
 * @LastEditors: findnr
 * @LastEditTime: 2024-09-26 15:30:07
 * @Description: 
-->
<template>
    <div class="demo-datetime-picker">
      <div class="block">
          <el-date-picker
          v-model="time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          @change="timeChange"
          />
      </div>
    </div>
  </template>
  
  <script setup>
  const emits=defineEmits(['sedTime'])
  const time=ref();
  const timeObj=reactive({start_time:0,end_time:0})
  const timeChange=()=>{
      if(time.value == null) return;
      timeObj.start_time= Date.parse(new Date(time.value[0]).toString())/1000
      timeObj.end_time= Date.parse(new Date(time.value[1]).toString())/1000
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
  