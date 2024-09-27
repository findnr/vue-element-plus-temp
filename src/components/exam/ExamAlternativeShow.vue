<!--
 * @Author: findnr
 * @Date: 2024-05-18 20:06:58
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-19 08:11:32
 * @Description: 
-->
<template>
  <div class="content" v-for="(v,k) in content" :key="k">
        <div class="box" v-if="v.qt_id == 2">
            <h5>{{k+1}}、{{v.title.q_title}}</h5>
            <el-checkbox-group v-model="v.user_answer">
                <p v-for="(vone,kone) in v.all_answer" style="width:100%;" :key="kone">
                    <el-checkbox :label="anserShow[kone]+'、'+vone.q_content" :value="anserShow[kone]" />
                </p>
            </el-checkbox-group>
            <p>
                <p>正确答案：{{isInfo[k].answer}}</p>
                <p v-if="isInfo[k].isOk" class=" text-green-500" > 正确：{{isInfo[k].score}}</p>
                <p v-else class=" text-red-600">错误</p>
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
const isInfo=ref([])
props.content.forEach((v,k) => {
    if(v.qt_id == 2){
        let tmp=[];
        v.all_answer.forEach((vone,kone) => {
           if(vone.correct_answer == 1) tmp.push(anserShow[kone])
        });
        let isComplate=true;
        let complateNum=0;
        v.user_answer.forEach(vtwo => {
            let isAnser=tmp.includes(vtwo)
            if(isAnser){
                complateNum++;
            }else{
                isComplate=false;
            }
        });
        let retContent={isOk:false,score:0,answer:tmp};
        if(isComplate){
            retContent.isOk = true;
            if(tmp.length == complateNum){
                retContent.score=2;
                props.score.alternative+=2;
            }else{
                let tmpScore=complateNum*0.5;
                props.score.alternative+=tmpScore;
                retContent.score=tmpScore;
            }
        }
        isInfo.value[k]=retContent;
    }
});
// console.log(isInfo.value)
// const complateScore=(all_answer,user_answer)=>{
//     let tmp=[];
//     all_answer.forEach((vone,kone) => {
//         if(vone.correct_answer == 1) tmp.push(anserShow[kone])
//     });
//     let isComplate=true;
//     let complateNum=0;
//     user_answer.forEach(v => {
//         let isAnser=tmp.includes(v)
//         if(isAnser){
//             complateNum++;
//         }else{
//             isComplate=false;
//         }
//     });
//     let retContent={isOk:false,score:0,anser:tmp};
//     if(isComplate){
//         retContent.isOk = true;
//         if(tmp.length == complateNum){
//             retContent.score=2;
//         }else{
//             retContent.score=complateNum*0.5;
//         }
//     }
//     return retContent;
// }
</script>

<style scoped lang="scss">

.index{}

</style>
