<!--
 * @Author: 程英明
 * @Date: 2022-11-14 15:56:25
 * @LastEditTime: 2023-02-14 14:45:23
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\navType.vue
 * QQ:504875043@qq.com
-->
<!--
 * @Author: 程英明
 * @Date: 2022-11-14 15:53:56
 * @LastEditTime: 2023-02-14 14:24:33
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\action.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="add">
        <el-button @click="addBox" type="success">
            <el-icon>
                <Plus />
            </el-icon>添加导航类型
        </el-button>
    </div>
    <el-dialog v-model="isAddBox" title="添加导航类型">
        <el-form :model="addForm">
            <el-form-item label="操作名称">
                <el-input v-model="addForm.name" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addBoxReset">重置信息</el-button>
                <el-button type="primary" @click="add">
                    确认提交
                </el-button>
            </span>
        </template>
    </el-dialog>
    <div class='index'>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="自增ID" width="180" />
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button @click="midBox(scope.row)" size="small" type="success">修改</el-button>
                    <el-button @click="del(scope.row)" size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog v-model="isMidBox" title="添加导航信息">
        <el-form :model="midForm">
            <el-form-item label="操作名称">
                <el-input v-model="midForm.name" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="mid(midForm)">
                    确认修改
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { system } from "../../../api/admin"
const tableData = ref([])
const getSystme = () => {
    system('system/navtype/get', {}, false).then(res => {
        if (res.code == 200) {
            tableData.value = res.data
        }
    })
}
getSystme();
const isAddBox = ref(false)
const addForm = ref({})
const addBox = () => {
    isAddBox.value = true;
}
const addBoxReset = () => {
    addForm.value = {}
}
const add = () => {
    system('system/navtype/add', addForm.value).then(res => {
        if (res.code == 200) {
            isAddBox.value = false
            addBoxReset();
            getSystme();
        }
    })
}
const midForm = ref({})
const isMidBox = ref(false);
const midBox = (obj) => {
    midForm.value = obj
    isMidBox.value = true;
}
const mid = (obj) => {
    system("system/navtype/mid", obj).then(res => {
        if (res.code == 200) {
            isMidBox.value = false
            getSystme();
        }
    })
}
const del = (obj) => {
    system("system/navtype/del", { id: obj.id }).then(res => {
        if (res.code == 200) {
            getSystme();
        }
    })
}
</script>
