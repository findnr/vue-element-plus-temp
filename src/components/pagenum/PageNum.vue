<!--
 * @Author: findnr
 * @Date: 2024-09-26 16:00:41
 * @LastEditors: findnr
 * @LastEditTime: 2024-09-27 09:20:28
 * @Description: 
-->
<template>
  <div class='index'>
    <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total" @change="change" v-model:page-size="pageSize" />
  </div>
</template>

<script setup>
defineProps({
    total: {
        type:Number,
        default:0,
        required:false,
    },
    pageSize:{
        type:Number,
        default:10,
        required:false,
    }
})
const emits=defineEmits(['pageSendData'])
const pageSize=ref(10)
const where=reactive({page:0,size:pageSize.value})
const change=(obj)=>{
    where.page=obj;
    emits('pageSendData',where);
}
</script>

<style scoped lang="scss">

.index{}

</style>
