<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2023-02-10 16:03:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\mangeruser\auth.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-dialog v-model="isAddBox" title="添加组信息">
    <el-tree :key="treeNum" ref="refTree" :default-checked-keys="selectData" @check-change="authChang" :data="navList"
      show-checkbox node-key="id" :default-expand-all="false" :expand-on-click-node="false"
      :props="{ label: 'name' }" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addBoxReset">重置信息</el-button>
        <el-button type="primary" @click="add"> 确认提交 </el-button>
      </span>
    </template>
  </el-dialog>
  <div class="index mt-3">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column type="index" label="序号" width="50" />
      <el-table-column prop="name_login" label="登录名" width="180" />
      <el-table-column prop="name_real" label="真实名" width="180" />
      <el-table-column prop="phone" label="手机号" width="120" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="ar_name" label="所属组" width="180" />
      <el-table-column label="权限设置">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" plain type="success">
            <el-icon style="font-size: 20px">
              <Edit />
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
const navList = ref([]);
const selectData = ref([]);
const refTree = ref(null);
const id = ref(0)
const treeNum = ref(0)
const getManger = () => {
  mangeruser("mangerUser/auth/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data.user;
      navList.value = res.data.navList;
    }
  });
};
getManger();
const isAddBox = ref(false);
const addBox = () => {
  isAddBox.value = true;
};
const addBoxReset = () => {
  selectData.value = [];
  id.value = 0;
};
const midBox = (obj) => {
  id.value = obj.id
  selectData.value = obj.auth.split(',');
  treeNum.value++
  isAddBox.value = true;
};
const authChang = () => {
  let datas = refTree.value.getCheckedNodes()
  let new_datas = [];
  datas.forEach(v => {
    new_datas.push(v.id)
  });
  selectData.value = Array.from(new Set(new_datas));
}
const add = () => {
  mangeruser("mangerUser/auth/mid", { id: id.value, auths: selectData.value.join(',') }).then((res) => {
    if (res.code == 200) {
      isAddBox.value = false;
      addBoxReset();
      getManger();
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
