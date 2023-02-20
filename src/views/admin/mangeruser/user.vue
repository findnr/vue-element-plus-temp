<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2023-02-14 15:06:00
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\mangeruser\user.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="add">
    <el-button @click="addBox" type="success">
      <el-icon>
        <Plus />
      </el-icon>添加用户信息
    </el-button>
  </div>
  <el-dialog v-model="isAddBox" title="添加组信息">
    <el-form :model="addForm" label-width="120px">
      <el-form-item label="所属组">
        <el-select v-model="addForm.ar_id" class="m-2">
          <el-option v-for="v in selectData" :key="v.id" :label="v.name" :value="v.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="中文名称">
        <el-input v-model="addForm.name_real" />
      </el-form-item>
      <el-form-item label="登录名称">
        <el-input v-model="addForm.name_login" />
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="addForm.password" />
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input v-model="addForm.phone" />
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="addForm.email" />
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
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="name_login" label="登录名" width="180" />
      <el-table-column prop="name_real" label="真实名" width="180" />
      <el-table-column prop="phone" label="手机号" width="120" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="ar_name" label="所属组" width="180" />
      <el-table-column label="合并权限" width="100">
        <template #default="scope">
          <el-switch :active-value="1" :inactive-value="0" @change="mid1(scope.row)" v-model="scope.row.is_merge"
            class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template #default="scope">
          <el-switch :active-value="1" :inactive-value="0" @change="mid2(scope.row)" v-model="scope.row.status"
            class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" size="small" type="success">修改</el-button>
          <el-button @click="del(scope.row)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="isMidBox" title="修改改用户信息">
    <el-form :model="midForm" label-width="120px">
      <el-form-item label="所属组">
        <el-select v-model="midForm.ar_id" class="m-2">
          <el-option v-for="v in selectData" :key="v.id" :label="v.name" :value="v.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="中文名称">
        <el-input v-model="midForm.name_real" />
      </el-form-item>
      <el-form-item label="登录名称">
        <el-input v-model="midForm.name_login" />
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input v-model="midForm.phone" />
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="midForm.email" />
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="mid(midForm)">确认修改</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { mangeruser } from "../../../api/admin";

const tableData = ref([]);
const selectData = ref([]);
const getMangerUser = () => {
  mangeruser("mangerUser/user/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data.user;
      selectData.value = res.data.role
    }
  });
};
getMangerUser();
const addForm = ref({ ar_id: 1 });
const isAddBox = ref(false);
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  addForm.value = {};
  addForm.value.parent_id = 1;
};
const midForm = ref({})
const isMidBox = ref(false)
const midBox = (obj) => {
  midForm.value = obj;
  isMidBox.value = true
};
const mid = (data) => {
  mangeruser("mangerUser/user/mid", data).then((res) => {
    if (res.code == 200) {
      isMidBox.value = false
      getMangerUser();
    }
  });
}
const mid1 = (obj) => {
  mid({ id: obj.id, is_merge: obj.is_merge })
}
const mid2 = (obj) => {
  mid({ id: obj.id, status: obj.status })
}
const add = () => {
  mangeruser("mangerUser/user/add", addForm.value).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getMangerUser();
    }
  });
};

const del = (obj) => {
  mangeruser("mangerUser/user/del", { id: obj.id }).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getMangerUser();
    }
  });
};
</script>
<script>
export default { route: { meta: { auth: true } } };
</script>
<style scoped lang="scss">
.index {}
</style>
