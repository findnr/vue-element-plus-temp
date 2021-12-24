<!--
 * @Author: 程英明
 * @Date: 2021-12-01 16:37:47
 * @LastEditTime: 2021-12-24 11:38:01
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\test\Init.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
      这是test初始化页面
  </div>
  <p style="color:red;">{{store.getters['user/title']}}</p>
  <button @click="midContent">you click,this is test</button>
  <div class="red"></div>
</template>

<script setup>
import {ref,computed} from "vue"
//测试vuex数据
import { useStore } from 'vuex'
const store = useStore();
console.log(store.state.user.title)
// const user = ref(computed(()=>{return store.state.user.title }))
console.log(store.getters)
// const user = ref(computed(()=>{return store.getters['user/title'] }))
// console.log(user.value)
const midContent=()=>{
  //mutations测试
  // store.commit('user/test','you click,this is test')
  // store.commit('list/test')
  //actions测试
  store.dispatch('user/clickTest');
}
// import {test} from '../../api/example';

// test({});

</script>

<style scoped lang="scss">

.index{}
.red{

}
</style>
