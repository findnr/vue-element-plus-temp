<!--
 * @Author: 程英明
 * @Date: 2022-02-25 11:01:26
 * @LastEditTime: 2022-04-25 20:38:30
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\sidebar\Sidebar.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-menu :default-active="data.activeMenu" :unique-opened="true" :mode="mode"
    :collapse="isCollapse && mode !== 'horizontal'" :class="{ 'no-transition': isCollapse }">
    <Logo v-if="isShowLogo" :titleName="titleName" ></Logo>
    <sidebar-item v-for="item in menuList" :key="item.menuId" :item="item" :collapse="collapse"></sidebar-item>
  </el-menu>
</template>

<script setup>
import { getTabs } from "@/utils/storage";
import { setBreadcrumb } from "@/utils/storage";
const props=defineProps({
  mode: String,
  showLogo: Boolean,
  collapse: Boolean,
  menuList: Array,
  titleName: String,
})

const store = useStore();
const collapse = props.collapse;
const data = reactive({
  activeMenu: "",
});
// 是否显示Logo
const isShowLogo = computed(() => {
  return props.showLogo;
});

// 是否折叠菜单
const isCollapse = computed(() => {
  if (props.collapse) {
    return collapse;
  } else {
    return store.state.isCollapse;
  }
});

const _tabs = getTabs();
_tabs.forEach((item) => {
  if (item.active) data.activeMenu = item.id;
});

const _getParentMenu = (list, id) => {
  for (let i in list) {
    if (list[i].menuId == id) {
      return [list[i]];
    }
    if (list[i].children) {
      let node = _getParentMenu(list[i].children, id);
      if (node !== undefined) {
        return node.concat(list[i]);
      }
    }
  }
};
setBreadcrumb(_getParentMenu(props.menuList, data.activeMenu));

watch(
  () => store.state.activeMenu,
  (value, old) => {
    data.activeMenu = value;
    setBreadcrumb(_getParentMenu(props.menuList, value));
  }
);
</script>

<style>
</style>
