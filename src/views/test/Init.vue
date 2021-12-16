<!--
 * @Author: 程英明
 * @Date: 2021-12-01 16:37:47
 * @LastEditTime: 2021-12-16 15:33:56
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\test\Init.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
      这是test初始化页面
  </div>
  <div class="red"></div>
</template>

<script setup>

// import store from '../../store'
// console.log(store)

import {test} from '../../api/example';

test({});

</script>

<style scoped lang="scss">

.index{}
.red{

}
</style>
