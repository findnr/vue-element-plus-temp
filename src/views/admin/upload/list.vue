<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2024-01-03 07:40:07
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\upload\list.vue
 * QQ:504875043@qq.com
-->
<template>
  选择类别：<el-select v-model="addForm.parent_id" class="m-2" @change="selectChange">
    <el-option label="无" :value="0" />
    <el-option v-for="v in selectData" :key="v.id" :label="v.name" :value="v.id" />
  </el-select>
  <div class="add">
    <el-button @click="addBox" type="success">
      <el-icon> <Plus /> </el-icon>添加文件
    </el-button>
  </div>
  <el-dialog v-model="isAddBox" title="添加文件信息">
    <el-form :model="addForm"
      ><UploadFile :key="refFileNum" ref="refFile"></UploadFile>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addBoxReset">重置信息</el-button>
        <el-button type="primary" @click="add"> 确认提交 </el-button>
      </span>
    </template>
  </el-dialog>
  <div class="index mt-3">
    <el-table :data="tableData.list" style="width: 100%" row-key="id" border>
      <el-table-column type="index" label="序号" :index="indexMethod" width="80" />
      <el-table-column prop="name" label="文件名称" />
      <el-table-column prop="path" label="地址" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" size="small" type="success"
            >修改</el-button
          >
          <el-button @click="seeBox(scope.row)" size="small" type="primary"
            >查看下载</el-button
          >
          <el-button @click="del(scope.row)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="bg-white flex pb-2 justify-items-center text-center">
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="tableData.total"
      class="mt-4"
      @current-change="change"
    />
  </div>
  <el-dialog v-model="isMidBox" title="修改文件分类信息">
    <el-form :model="midForm">
      <el-form-item label="文件名称">
        <el-input v-model="midForm.name" />
      </el-form-item>
      <el-form-item label="父级名称">
        <el-select v-model="midForm.parent_id" class="m-2">
          <el-option label="无" :value="0" />
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
  <SeeFile ref="refSeeFile"  :url="url"></SeeFile>
</template>

<script setup>
import { ref } from 'vue';
import { upload } from "../../../api/admin";
import cymconfig from "../../../config"

const refFileNum = ref(0);
const refFile = ref(null);
const tableData = reactive({ list: [], total: 0 });
const selectData = ref([]);
const addForm = ref({ parent_id: 0 });
let where = { page: 0 };
const getUpload = () => {
  upload(
    "list/get",
    Object.assign(where, { parent_id: addForm.value.parent_id }),
    false
  ).then((res) => {
    if (res.code == 200) {
      tableData.list = res.data.list;
      tableData.total = res.data.total;
      selectData.value = res.data.oldData;
    }
  });
};
getUpload();
const selectChange = (obj) => {
  getUpload();
};
const isAddBox = ref(false);
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  refFileNum.value++;
};
const midForm = ref({});
const isMidBox = ref(false);
const midBox = (obj) => {
  midForm.value = obj;
  isMidBox.value = true;
};
const add = () => {
  let obj = refFile.value.getContent();
  let data = Object.assign({ u: 1 }, obj, addForm.value);
  if ((data.file == undefined || data.file.length) == 0) {
    alert("没有文件内容，不能上传");
    return;
  }
  upload("list/add", data).then((res) => {
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
  upload("list/mid", temp).then((res) => {
    if (res.code == 200) {
      isMidBox.value = false;
      addBoxReset();
      getUpload();
    }
  });
};
const del = (obj) => {
  upload("list/del", { id: obj.id }).then((res) => {
    if (res.code == 200) {
      getUpload();
    }
  });
};
const indexMethod = (n) => {
  if (where.page != 0) {
    return (where.page - 1) * 10 + n + 1;
  }
  return where.page * 10 + n + 1;
};
const change = (n) => {
  where.page = n;
};
const url=ref('');
const refSeeFile=ref(null)
const seeBox = (n) => {
  url.value=cymconfig.file_url+n.path
  refSeeFile.value.show();
}
</script>
<script>
export default { route: { meta: { auth: true } } };
</script>
<style scoped lang="scss">
.index {
}
</style>
