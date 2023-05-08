<!--
 * @Author: 程英明
 * @Date: 2023-05-08 10:28:06
 * @LastEditTime: 2023-05-08 10:45:29
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\box\TitleNum.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class='index w-[200px] bg-white'>
        <div class="title p-2">{{ title }}</div>
        <div class="num text-center text-[20px] font-bold pt-5 pb-5">{{ num }}</div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    num: String,
})
</script>

<style scoped lang="scss">
.index {
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-left: 10px;

    .title {
        border-bottom: 1px solid #ccc;
        color: #777;
    }
}
</style>