<!--
 * @Author: 程英明
 * @Date: 2022-02-28 14:42:56
 * @LastEditTime: 2023-02-10 16:22:49
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\user\info.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
    <el-form label-position="Right" label-width="100px" :model="user" style="max-width: 460px">
      <el-form-item label="名称">
        <el-input disabled v-model="user.name_real" />
      </el-form-item>
      <el-form-item label="登录名">
        <el-input disabled v-model="user.name_login" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input disabled v-model="user.phone" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { Time } from "findnrjs"
import { info } from "@/api/admin"
const user = ref({});
info('user/info/get', {}, false).then(res => {
  if (res.code == 200) {
    res.data.login_time = Time.format({ time: res.data.login_time })
    user.value = res.data
  }
})
</script>
<script>
export default { route: { meta: { auth: true, type: 1 } } };
</script>

<style scoped lang="scss">
.index {}
</style>