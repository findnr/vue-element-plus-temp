<!--
 * @Author: your name
 * @Date: 2022-02-26 14:53:32
 * @LastEditTime: 2022-02-28 15:24:58
 * @LastEditors: 程英明
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\sidebar\SidebarItem.vue
-->
<template>
  <el-sub-menu :index="item.menuId" v-if="item.children.length > 0">
    <template #title>
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.menuName }}</span>
    </template>
    <sidebar-item v-for="inner in item.children" :key="inner.menuId" :item="inner"></sidebar-item>
  </el-sub-menu>
  <el-menu-item :index="item.menuId" v-else @click="handleMenu(item)">
    <el-icon v-if="item.icon != ''">
      <component :is="item.icon" />
    </el-icon>
    <span v-if="collapse">{{ item.menuName }}</span>
    <template #title>{{ item.menuName }}</template>
  </el-menu-item>
</template>

<script setup>
import { setTabs, getTabs } from "@/utils/storage.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router"

defineProps({
  item: Object,
  collapse: Boolean,
});


const store = useStore();
const router = useRouter();
// 点击菜单回调
const handleMenu = (obj) => {
  const { menuId, menuName, path } = obj;
  let tabs = getTabs();
  let flag = true;
  tabs.forEach((item) => {
    if (item.id === menuId) {
      flag = false;
    }
  });
  if (flag) {
    tabs.push({
      id: menuId,
      name: menuName,
      path: path,
      active: true,
    });
  }
  store.commit("getActiveMenu", menuId);
  setTabs(tabs, menuId);
  router.push({ path: path });
};
</script>

<style></style>
