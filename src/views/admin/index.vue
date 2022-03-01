<!--
 * @Author: 程英明
 * @Date: 2022-02-25 13:31:06
 * @LastEditTime: 2022-03-01 16:52:48
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\index.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="index h-screen">
    <layout :menuList="menuList" :navbarInfo="navbarInfo">
      <template #home>
        <router-view></router-view>
      </template>
    </layout>
  </div>
</template>

<script setup>
const menuList = [
  {
    menuId: "111",
    menuName: "系统设置",
    icon: "tools",
    children: [
      {
        menuId: "111-1",
        menuName: "退出系统",
        path: "/admin/system/loginout",
        children: [],
        icon: "arrow-right-bold",
      },
    ]
  },
  {
    menuId: "222",
    menuName: "个人中心",
    icon: "avatar",
    children: [
      {
        menuId: "222-1",
        menuName: "个人信息",
        path: "/admin/user/info",
        children: [],
        icon: "menu",
      },
      {
        menuId: "222-2",
        menuName: "修改密码",
        path: "/admin/user/password",
        children: [],
        icon: "menu",
      },
    ]
  }
];
const navbarInfo = {
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
    menuId: "111-1",
    menuName: "退出系统",
    path: "/admin/system/loginout",
  }],
  name: '欢迎使用系统',
}
</script>

<style scoped lang="scss">
.index {
}
</style>