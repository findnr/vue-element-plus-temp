<!--
 * @Author: findnr
 * @Date: 2024-05-18 17:36:43
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-18 22:02:22
 * @Description: 
-->
<template>
    <div class="content" v-for="(v,k) in content" :key="k">
        <div class="box" v-if="v.qt_id == 4">
            <h5>{{k+1}}、{{v.title.q_title}}</h5>
            <div v-for="(vone,kone) in v.all_answer" style="width:100%;" :key="kone">
                <div>正确答案：{{vone.q_content}}</div>
                <div v-if="vone.q_content == v.user_answer" class=" text-green-500" > 正确</div>
                <div v-else class=" text-red-600">错误</div>
            </div>
            <div>用户答案：{{v.user_answer}}</div>
        </div>
    </div>    
</template>

<script setup>

const props = defineProps({
    content:Object,
    score:Object,
})
props.content.forEach(v => {
    if(v.qt_id == 4){
        let tmp='';
        v.all_answer.forEach((vone,kone) => {
           if(vone.q_content == v.user_answer) props.score.fill+=1
        });
    }
    
});




</script>

<style scoped lang="scss">

.index{}

</style>
