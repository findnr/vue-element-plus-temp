<!--
 * @Author: 程英明
 * @Date: 2022-05-13 16:31:16
 * @LastEditTime: 2024-01-03 07:43:03
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\box\SeeFile.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-dialog :key="seeNum" v-model="is_show" class="index" width="60%">
    <div>
      <object class="w-full" v-if="is" style="min-height: 600px" :data="url"></object>
      <a ref="refALink" :href="url" target="_blank" rel="noopener noreferrer"></a>
      <!-- <embed v-if="is" :src="url" class="w-full" style="min-height: 600px" />
      <img v-else :src="url" alt="" /> -->
    </div>
  </el-dialog>
</template>
<script setup>
const seeNum = ref(0);
const is = ref(false);
const extArr = ['pdf','jpg','png','git','jpeg','txt'];
const refALink = ref(null);
const props = defineProps({
  url: String,
});
const is_show = ref(false);
const show = () => {
  is_show.value = true;
  seeNum.value++;
};
defineExpose({ show });
watch(
  () => props.url,
  (n, o) => {
    let arr = n.split(".");
    let len = arr.length;
    if (extArr.indexOf(arr[len - 1]) == -1) {
      is.value = false;
      setTimeout(() =>{
        refALink.value.click();
        is_show.value=false;
      },500)
      
    } else {
      is.value = true;
    }
  }
);
</script>

<style scoped lang="scss">
.index {
}
</style>
