<!--
 * @Author: 程英明
 * @Date: 2022-11-14 14:59:38
 * @LastEditTime: 2022-11-14 15:17:53
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\setting.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class='index'>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="序号" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup>
const tableData = ref([])
</script>

<style scoped lang="scss">
.index {}
</style>
