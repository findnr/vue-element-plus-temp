<!--
 * @Author: 程英明
 * @Date: 2022-11-14 15:53:56
 * @LastEditTime: 2023-02-10 16:04:03
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\action.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class='index'>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="180" />
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="action" label="操作动作" width="180" />
            <el-table-column prop="icon" label="图标" width="180" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button @click="midBox(scope.row)" plain type="success">
                        <el-icon style=" font-size:20px">
                            <Edit />
                        </el-icon>
                    </el-button>
                    <el-button @click="del(scope.row)" plain type="danger">
                        <el-icon style=" font-size:20px">
                            <Delete />
                        </el-icon>
                    </el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { system } from "../../../api/admin"
const tableData = ref([])
system('system/action/get', {}, false).then(res => {
    if (res.code == 200) {
        tableData.value = res.data
    }
    // console.log(res);
})
const midBox = (obj) => {
    console.log(obj)
}
const del = (obj) => {
    console.log(obj)
}
</script>

<style scoped lang="scss">
.index {}
</style>
