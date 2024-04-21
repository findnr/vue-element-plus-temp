<!--
 * @Author: 程英明
 * @Date: 2023-05-08 09:26:29
 * @LastEditTime: 2023-12-28 11:01:22
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\editor\CymMdEditor.vue
 * QQ:504875043@qq.com
-->

<template>
    <MdEditor ref="mdObj" v-model="text" @onSave="onSave" @onBlur="onBlur" @onUploadImg="onUploadImg" />
</template>
  
<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const props=defineProps({
    oldText:String,
})
const text = ref('');
const html=ref('');
const textRaw=ref('');
const mdObj=ref(null)
const onSave = (v, h) => {
    textRaw.value=v;
    h.then((ht) => {
        html.value=ht;
    });
};

const onBlur=()=>{
    mdObj.value.triggerSave();
}
const onUploadImg=()=>{
    //暂时没有开发
}
const getContent=()=>{
    return {textRaw:textRaw.value,html:html.value}
}
defineExpose({getContent});
watch(
    ()=>props.oldText,
    (n, o) => {
        mdObj.value.insert(()=>{
            return {
                targetValue: props.oldText,
                select: true,
                deviationStart: 0,
                deviationEnd: 0
            };
        })
    }
);
</script>

<style scoped lang="scss">
.index {}
</style>
