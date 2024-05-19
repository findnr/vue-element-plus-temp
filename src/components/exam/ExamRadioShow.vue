<!--
 * @Author: findnr
 * @Date: 2024-05-18 17:36:43
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-18 20:19:23
 * @Description: 
-->
<template>
    <div class="content" v-for="(v,k) in content" :key="k">
        <div class="box" v-if="v.qt_id == 1">
            <h5>{{k+1}}、{{v.title.q_title}}</h5>
            <el-radio-group v-model="v.user_answer" class="ml-4">
                <p v-for="(vone,kone) in v.all_answer" style="width:100%;">
                    <el-radio :value="anserShow[kone]" size="large" >{{anserShow[kone]}}、{{vone.q_content}}</el-radio>
                </p><br />
            </el-radio-group>
            <p v-for="(vone,kone) in v.all_answer">
                <p v-if="vone.correct_answer == 1">
                    <p>正确答案：{{anserShow[kone]}}</p>
                    <p v-if="anserShow[kone] == v.user_answer" class=" text-green-500" > 正确</p>
                    <p v-else class=" text-red-600">错误</p>
                </p>
            </p>
            <p>用户答案：{{v.user_answer}}</p>
        </div>
    </div>    
</template>

<script setup>

let anserShow=['A','B','C','D','E','F']

const props = defineProps({
    content:Object,
    score:Object,
})
props.content.forEach(v => {
    if(v.qt_id == 1){
        let tmp='';
        v.all_answer.forEach((vone,kone) => {
           if(vone.correct_answer == 1) tmp=anserShow[kone]
        });
        if(tmp == v.user_answer) props.score.radio+=0.5; 
    }
    
});




</script>

<style scoped lang="scss">

.index{}

</style>
