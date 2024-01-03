<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2023-12-29 10:56:10
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\upload\type.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="add">
    <el-button @click="addBox" type="success">
      <el-icon> <Plus /> </el-icon>添加文件分类
    </el-button>
  </div>
  <el-dialog v-model="isAddBox" title="添加文件分类信息">
    <el-form :model="addForm">
      <el-form-item label="名称">
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
    <el-table :data="tableData" style="width: 100%" row-key="id" border>
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" size="small" type="success"
            >修改</el-button
          >
          <el-button @click="del(scope.row)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog v-model="isMidBox" title="修改文件分类信息">
    <el-form :model="midForm">
      <el-form-item label="组名称">
        <el-input v-model="midForm.name" />
      </el-form-item>
      <el-form-item label="父级名称">
        <el-select v-model="midForm.parent_id" class="m-2">
          <el-option label="顶级组名" :value="0" />
          <el-option v-for="v in selectData" :key="v.id" :label="v.name" :value="v.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="mid(midForm)"> 确认提交 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { upload } from "../../../api/admin";

const tableData = ref([]);
const selectData = ref([]);
const getUpload = () => {
  upload("type/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data.newData;
      selectData.value = res.data.oldData;
    }
  });
};
getUpload();
const addForm = ref({ parent_id: 0 });
const isAddBox = ref(false);
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  addForm.value = {};
  addForm.value.parent_id = 0;
};
const midForm = ref({});
const isMidBox = ref(false);
const midBox = (obj) => {
  midForm.value = obj;
  isMidBox.value = true;
};
const add = () => {
  upload("type/add", addForm.value).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getUpload();
    }
  });
};
const mid = (obj) => {
  let temp = JSON.parse(JSON.stringify(obj));
  if (temp.children != undefined) {
    delete temp.children;
  }
  upload("type/mid", temp).then((res) => {
    if (res.code == 200) {
      isMidBox.value = false;
      addBoxReset();
      getUpload();
    }
  });
};
const del = (obj) => {
  if (obj.children != undefined) {
    alert("有子类，不能删除");
    return;
  }
  upload("type/del", { id: obj.id }).then((res) => {
    if (res.code == 200) {
      getUpload();
    }
  });
};
</script>
<script>
export default { route: { meta: { auth: true } } };
</script>
<style scoped lang="scss">
.index {
}
</style>
