<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2022-11-18 16:07:01
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\nav.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="add">
        <el-button @click="addBox" type="success">
            <el-icon>
                <Plus />
            </el-icon>添加导航
        </el-button>
    </div>
    <el-dialog v-model="isAddBox" title="添加导航信息">
        <el-form :model="addForm">
            <el-form-item label="导航名称">
                <el-input v-model="addForm.name" />
            </el-form-item>
            <el-form-item label="前台URL">
                <el-input v-model="addForm.index_url" />
            </el-form-item>
            <el-form-item label="后台URL">
                <el-input v-model="addForm.admin_url" />
            </el-form-item>
            <el-form-item label="导航类型">
                <el-radio-group v-model="addForm.nav_type_id" class="ml-4">
                    <el-radio v-for="v, i in navType" :label="v.id" :key="i">{{ v.name }}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="相关的操作">
                <el-checkbox-group v-model="addForm.action_id">
                    <el-checkbox v-for="v, i in actionData" :label="v.id" :key="i">{{ v.name }}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Icon图标">
                <el-input v-model="addForm.icon" />
            </el-form-item>
            <el-form-item label="导航排序">
                <el-input v-model="addForm.sort" />
            </el-form-item>
            <el-form-item label="父级导航">
                <el-select v-model="addForm.parent_id" class="m-2">
                    <el-option label="顶级导航" :value="0" />
                    <el-option v-for="v in tableData" :key="v.id" :label="v.name" :value="v.id" />
                </el-select>
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
    <div class='index mt-3'>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="180" />
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="index_url" label="前台URL" width="180" />
            <el-table-column prop="admin_url" label="后台URL" width="180" />
            <el-table-column prop="nav_type_id" label="导航类型" width="180" />
            <el-table-column prop="action_id" label="拥有动作" width="180" />
            <el-table-column prop="sort" label="排序" width="180" />
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

const tableData = ref([]);
const navType = ref([]);
const actionData = ref([]);
const getSystme = () => {
    system('admin/nav/nav/get', {}, false).then(res => {
        if (res.code == 200) {
            tableData.value = res.data.adminNav
            navType.value = res.data.navType
            actionData.value = res.data.action
        }
    })
}
getSystme();
const addForm = ref({ parent_id: 0 });
const isAddBox = ref(false);
const addBox = () => {
    isAddBox.value = true;
}
const addBoxReset = () => {
    addForm.value = {}
    addForm.value.parent_id = 0
}
const midBox = (obj) => {
    console.log(obj)
}
const add = () => {
    system('admin/nav/nav/add', addForm.value).then(res => {
        if (res.code == 200) {
            isAddBox.value = false
            addBoxReset();
            getSystme();
        }
    })
}

const del = (obj) => {
    console.log(obj)
}
</script>
<script>
export default { route: { meta: { auth: true } } };
</script>
<style scoped lang="scss">
.index {}
</style>
