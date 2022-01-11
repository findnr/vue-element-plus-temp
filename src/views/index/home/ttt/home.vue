<!--
 * @Author: 程英明
 * @Date: 2022-01-11 13:49:13
 * @LastEditTime: 2022-01-11 14:53:10
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\index\home\ttt\home.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
      index-home-ttt-home
  </div>
</template>

<script setup>
import {ref} from 'vue'
const test=ref(123);
const ttt=()=>{
    console.log(ttt)
}
defineExpose({test})
</script>

<style scoped lang="scss">

.index{}

</style>
