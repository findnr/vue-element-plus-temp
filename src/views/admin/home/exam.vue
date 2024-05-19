<!--
 * @Author: findnr
 * @Date: 2024-05-18 17:40:41
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-19 09:54:46
 * @Description: 
-->
<template>
    <div class="box">
        <div class="top">
            <el-input v-model="tmp" style="width: 600px" placeholder="Please input" show-word-limit type="textarea" @change="onChange"  />
            <span class=" w-[200px] inline-block text-center">总分：{{score.radio+score.alternative+score.judge+score.fill}}</span>
            <span><el-button type="success" @click="onCopy" round>复制内容</el-button></span>
            <span>{{score}}</span>
        </div>
        <ExamTmpShow :content="content" :key="num" :score="score"></ExamTmpShow>
    </div>
</template>

<script setup>
import { watch } from 'vue';
const tmp=ref('');
const content=ref([])

const num=ref(0)
const score=reactive({radio:0,alternative:0,judge:0,fill:0})
const onCopy=()=>{
    navigator.clipboard.writeText(JSON.stringify(content.value)).then(() => {
        alert('copy successfully');
    }).catch(err => {
        alert('copy error', err);
    });
}
const onChange=()=>{
    content.value=JSON.parse(tmp.value)
}
watch(content, (val)=>{
    score.radio=0;
    score.alternative=0;
    score.judge=0;
    score.fill=0;
    // console.log(val)
    num.value++
},{
        deep:true, // 深度监听
        // immediate:true // 立即执行
    })

</script>

<style scoped lang="scss">
.top{
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    background-color: #333;
    color: white;
    padding: 10px;
    z-index: 1000;
}

</style>
