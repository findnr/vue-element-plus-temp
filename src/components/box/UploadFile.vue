<!--
 * @Author: 程英明
 * @Date: 2023-12-28 11:13:46
 * @LastEditTime: 2023-12-29 14:37:28
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\box\UploadFile.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-upload
    ref="refUpload"
    class="upload-demo"
    :auto-upload="false"
    :on-remove="fileRemove"
    :on-change="fileAdd"
  >
    <template #trigger>
      <el-button type="warning" size="small">选择文件</el-button>
    </template>
  </el-upload>
</template>
<script setup>
const refUpload = ref(null);
let elObj = [];
const namef = ref("");
const ext = ref("");
const fileList = [];
const fileAdd = (one) => {
  const nameArr = one.name.split(".");
  const nameLen = nameArr.length;
  namef.value = nameArr[0];
  ext.value = nameArr[nameLen - 1];
  _control_upload_button("none");
  fileList.push(one);
};
const fileRemove = (one) => {
  namef.value = "";
  _control_upload_button("block");
  fileList.pop();
};
const _control_upload_button = (style) => {
  if (elObj.length == 0) {
    elObj = document.querySelectorAll(".el-upload");
  }
  elObj[0].style.display = style;
};
const getContent = () => {
  return { name: namef.value, ext: ext.value, file: fileList };
};
defineExpose({ getContent });
</script>

<style scoped lang="scss">
.index {
}
</style>
