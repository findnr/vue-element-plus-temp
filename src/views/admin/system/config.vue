<!--
 * @Author: 程英明
 * @Date: 2022-11-14 15:53:56
 * @LastEditTime: 2023-12-29 09:35:46
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\system\config.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="add">
    <el-button @click="addBox" type="success">
      <el-icon>
        <Plus /> </el-icon
      >添加系统配制
    </el-button>
  </div>
  <el-dialog v-model="isAddBox" title="添加系统配制信息">
    <el-form :model="addForm">
      <el-form-item label="获取名">
        <el-input v-model="addForm.get_name" />
      </el-form-item>
      <el-form-item label="中文说明">
        <el-input v-model="addForm.info" />
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="addForm.content" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addBoxReset">重置信息</el-button>
        <el-button type="primary" @click="add"> 确认提交 </el-button>
      </span>
    </template>
  </el-dialog>
  <div class="index">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column prop="get_name" label="获取名" />
      <el-table-column prop="info" label="中文说明"  />
      <el-table-column prop="content" label="内容" />
      <el-table-column label="是否有效" width="100">
        <template #default="scope">
          <el-switch
            :active-value="1"
            :inactive-value="0"
            @change="mid(scope.row)"
            v-model="scope.row.status"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          />
        </template>
      </el-table-column>
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
  <el-dialog v-model="isMidBox" title="修改系统配制信息">
    <el-form :model="midForm">
      <el-form-item label="获取名">
        <el-input v-model="midForm.get_name" />
      </el-form-item>
      <el-form-item label="说明">
        <el-input v-model="midForm.info" />
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="midForm.content" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="mid(midForm)"> 确认修改 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { system } from "../../../api/admin";
const tableData = ref([]);
const getSystme = () => {
  system("system/config/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data;
    }
    // console.log(res);
  });
};
getSystme();
const isAddBox = ref(false);
const addForm = ref({});
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  addForm.value = {};
};
const add = () => {
  system("system/config/add", addForm.value).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getSystme();
    }
  });
};
const midForm = ref({});
const isMidBox = ref(false);
const midBox = (obj) => {
  midForm.value = obj;
  isMidBox.value = true;
};
const mid = (obj) => {
  system("system/config/mid", obj).then((res) => {
    if (res.code == 200) {
      isMidBox.value = false;
      getSystme();
    }
  });
};
const del = (obj) => {
  system("system/config/del", { id: obj.id }).then((res) => {
    if (res.code == 200) {
      getSystme();
    }
  });
};
</script>

<style scoped lang="scss">
.index {
}
</style>
