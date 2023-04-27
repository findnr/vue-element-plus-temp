<!--
 * @Author: 程英明
 * @Date: 2022-02-25 13:31:06
 * @LastEditTime: 2023-04-27 09:08:24
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\index.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="index h-screen">
    <layout :menuList="menuList" :navbarInfo="navbarInfo" titleName="后台管理系统">
      <template #home>
        <router-view></router-view>
      </template>
    </layout>
  </div>
</template>
<script setup>
import { common } from "../../api/admin"
const menuList = ref([]);
common('common/getNav', {}, false).then(res => {
  if (res.code == 200) {
    menuList.value = res.data
  }
})
const navbarInfo = reactive({
  img_url: '',
  url_list: [{
    menuId: "222-2",
    menuName: "修改密码",
    path: "/admin/user/password",
  }, {
    menuId: "222-1",
    menuName: "个人信息",
    path: "/admin/user/info",
  }, {
    menuId: "222-3",
    menuName: "退出系统",
    path: "/admin/user/loginout",
  }],
  name: '欢迎使用系统',
})
</script>

<style scoped lang="scss">
.index {}
</style>