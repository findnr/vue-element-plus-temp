<!--
 * @Author: 程英明
 * @Date: 2023-05-08 09:26:29
 * @LastEditTime: 2023-05-08 11:32:30
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\editor\CymMdEditor.vue
 * QQ:504875043@qq.com
-->

<template>
    <MdEditor v-model="text" @onSave="onSave" />
</template>
  
<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const text = ref('');
const onSave = (v, h) => {
    console.log(v);

    h.then((html) => {
        console.log(html);
    });
};
</script>

<style scoped lang="scss">
.index {}
</style>
