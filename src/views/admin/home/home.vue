<!--
 * @Author: your name
 * @Date: 2022-02-26 18:06:02
 * @LastEditTime: 2024-07-26 10:29:42
 * @LastEditors: findnr
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-element-plus-temp\src\views\admin\home\home.vue
-->
<template>
  <div class="index">
    <CymMdEditor :oldText="oldText"></CymMdEditor>
  </div>
  <div class="box" style="display:flex;">
    <TitleNum title="用户数据" num="100人"></TitleNum>
    <TitleNum title="用户数据" num="100人"></TitleNum>
    <TitleNum title="用户数据" num="100人"></TitleNum>
  </div><br />
  <div class="json">
    <XlsxToJson  @getJson="getJson"></XlsxToJson>
  </div><br />
  <div class="index">
    <CymQuillEditor></CymQuillEditor>
  </div>
  
</template>

<script setup>
const { appContext } = getCurrentInstance()
const oldText=ref("");
setTimeout(() =>{
  oldText.value="# fdsafdsa";
},2000)
const getJson=(obj)=>{
  console.log(obj)
}

</script>

<style scoped lang="scss">
.index {}
</style>
