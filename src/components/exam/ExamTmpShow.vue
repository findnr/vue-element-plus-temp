<!--
 * @Author: findnr
 * @Date: 2024-05-18 17:38:30
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-19 07:01:24
 * @Description: 
-->
<template>
  <div class='index'>
    <ExamCasesShow :content="content"></ExamCasesShow>
    <ExamRadioShow :score="score" :content="content"></ExamRadioShow>
    <ExamAlternativeShow :score="score" :content="content"></ExamAlternativeShow>
    <ExamJudgeShow :score="score" :content="content"></ExamJudgeShow>
    <ExamFillShow :score="score" :content="content"></ExamFillShow>
  </div>
</template>

<script setup>

defineProps({
    content:Object,
    score:Object,
})
</script>

<style scoped lang="scss">

.index{}

</style>
