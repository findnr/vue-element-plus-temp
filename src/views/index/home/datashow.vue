<!--
 * @Author: findnr
 * @Date: 2024-11-12 11:10:39
 * @LastEditors: findnr
 * @LastEditTime: 2024-11-15 11:07:17
 * @Description: 
-->
<template>
    <!-- <div class="w-[100%] h-[100%]" style="background-color: black;"></div> -->
    <div class="bg-[#100C2A] w-[100%] h-[100%]">
    <div class="w-[100%] h-[15%]">
        <TimeBigData></TimeBigData>
    </div>
    <div class="box">
        <div class="w-[25%] h-full">
            <div class="w-[100%] h-[50%]">
                <PieAutoShow></PieAutoShow>
            </div>
            <div class="w-[100%] h-[50%]">
                <PiePerson></PiePerson>
            </div>
        </div>
        <div class="w-[50%] h-full">
            <GuiZhouDiTu></GuiZhouDiTu>
        </div>
        <div class="w-[25%] h-full">
            <div class="w-[100%] h-[50%]">
                <PieAutoShow></PieAutoShow>
            </div>
            <div class="w-[100%] h-[50%]">
                <PiePerson></PiePerson>
            </div>
        </div>
    </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped lang="scss">
  .box{
    display: flex;
    width: 100%;
    height: 84%;
  }
  /* 可以为iframe设置自定义样式 */
  iframe {
    border: none;
  }
  </style>