<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2022-11-22 13:22:22
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\mangeruser\group.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="add">
    <el-button @click="addBox" type="success">
      <el-icon>
        <Plus />
      </el-icon>添加组信息
    </el-button>
  </div>
  <el-dialog v-model="isAddBox" title="添加组信息">
    <el-form :model="addForm">
      <el-form-item label="组名称">
        <el-input v-model="addForm.name" />
      </el-form-item>
      <el-form-item label="父级名称">
        <el-select v-model="addForm.parent_id" class="m-2">
          <el-option label="顶级组名" :value="0" />
          <el-option v-for="v in selectData" :key="v.id" :label="v.name" :value="v.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addBoxReset">重置信息</el-button>
        <el-button type="primary" @click="add"> 确认提交 </el-button>
      </span>
    </template>
  </el-dialog>
  <div class="index mt-3">
    <el-table :data="tableData" style="width: 100%" row-key="id" border default-expand-all>
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="sort" label="排序" width="180" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" plain type="success">
            <el-icon style="font-size: 20px">
              <Edit />
            </el-icon>
          </el-button>
          <el-button @click="del(scope.row)" plain type="danger">
            <el-icon style="font-size: 20px">
              <Delete />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { mangeruser } from "../../../api/admin";

const tableData = ref([]);
const selectData = ref([]);
const getMangerGroup = () => {
  mangeruser("admin/mangerUser/group/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data.newData;
      selectData.value = res.data.oldData;
    }
  });
};
getMangerGroup();
const addForm = ref({ parent_id: 0 });
const isAddBox = ref(false);
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  addForm.value = {};
  addForm.value.parent_id = 0;
};
const midBox = (obj) => {
  console.log(obj);
};
const add = () => {
  mangeruser("admin/mangerUser/group/add", addForm.value).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getMangerGroup();
    }
  });
};

const del = (obj) => {
  console.log(obj);
};
</script>
<script>
export default { route: { meta: { auth: true } } };
</script>
<style scoped lang="scss">
.index {}
</style>
