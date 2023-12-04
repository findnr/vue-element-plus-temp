<!--
 * @Author: 程英明
 * @Date: 2022-05-13 16:31:16
 * @LastEditTime: 2023-12-01 10:46:38
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\box\SeeFile.vue
 * QQ:504875043@qq.com
-->
<template>
    <el-dialog :key="seeNum" v-model="is_show" class="index" width="60%">
      <div>
        <embed v-if="is" :src="url" class="w-full" style="min-height: 600px" />
        <img v-else :src="url" alt="">
      </div>
    </el-dialog>
  </template>
  <script setup>
  const seeNum=ref(0)
  const is=ref(false)
  const props = defineProps({
    url: String,
  });
  const is_show = ref(false);
  const show = () => {
    is_show.value = true;
    seeNum.value++
  };
  defineExpose({ show });
  watch(
    ()=>props.url,
    (n,o)=>{
      let arr = n.split('.')
      let len = arr.length;
      if(arr[len-1] == 'pdf'){
        is.value=true
      }else{
        is.value=false
      }
    }
  )
  </script>
  
  <style scoped lang="scss">
  .index {
  }
  </style>
  