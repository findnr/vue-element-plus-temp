<!--
 * @Author: 程英明
 * @Date: 2022-11-15 11:06:19
 * @LastEditTime: 2023-02-13 16:25:08
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\mangeruser\groupauth.vue
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
    <el-table :data="tableData" style="width: 100%" row-key="id" border>
      <el-table-column type="index" label="序号" width="180" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column label="权限设置">
        <template #default="scope">
          <el-button @click="midBox(scope.row)" size="small" type="success">修改</el-button>
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
const getMangerGroup = () => {
  mangeruser("mangerUser/groupAuth/get", {}, false).then((res) => {
    if (res.code == 200) {
      tableData.value = res.data.newData;
      navList.value = res.data.navList;
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
  mangeruser("mangerUser/groupAuth/mid", { id: id.value, auth: selectData.value.join(',') }).then((res) => {
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
