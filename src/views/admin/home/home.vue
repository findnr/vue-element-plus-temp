<!--
 * @Author: your name
 * @Date: 2022-02-26 18:06:02
 * @LastEditTime: 2024-09-27 09:24:37
 * @LastEditors: findnr
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-element-plus-temp\src\views\admin\home\home.vue
-->
<template>
  <div class="index" style="height: 500px;">
    <CymQuillEditor></CymQuillEditor>
  </div>
  <PageNum :total="1000"></PageNum>
  <OneTime ></OneTime>
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
