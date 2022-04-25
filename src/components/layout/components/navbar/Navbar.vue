<!--
 * @Author: 张江亮
 * @Date: 2022-02-24 11:49:52
 * @LastEditTime: 2022-04-25 19:47:40
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\navbar\Navbar.vue
 * @QQ: 123316216@qq.com
-->
<template>
  <div class="header-content">
    <logo v-if="isShowLogo"></logo>
    <div class="header" :class="{ 'has-logo': isShowLogo }">
      <div class="header-left">
        <fold v-if="!isCollapse" class="navbar-icon _fold" @click="changeCollapse(true)" />
        <expand v-else class="navbar-icon _fold" @click="changeCollapse(false)" />
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in data.breadcrumb" :key="item.menuId">{{ item.menuName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <slot name="sidebar"></slot>
      </div>
      <div class="header-right">
        <full-screen></full-screen>
        <svg-icon name="language"></svg-icon>
        <user-info :navbarInfo="navbarInfo"></user-info>
        <setting class="navbar-icon" @click="showSetting" />
      </div>
    </div>
  </div>
  <system-setting ref="settings"></system-setting>
</template>

<script setup>
import { getBreadcrumb } from "../../../../utils/storage";
const props = defineProps({
  showLogo: Boolean,
  navbarInfo: Object,
})

const store = useStore();
const data = reactive({
  breadcrumb: getBreadcrumb(),
});

const settings = ref(null)
// 显示设置页面

const showSetting = () => settings.value.showDraw();

// 是否显示Logo
const isShowLogo = computed(() => {
  return props.showLogo;
});

// 是否折叠菜单
const isCollapse = computed(() => {
  return store.state.isCollapse;
});

// 切换菜单状态
const changeCollapse = (value) => store.commit("getCollapse", value);

watch(
  () => store.state.activeMenu,
  (value, old) => (data.breadcrumb = getBreadcrumb())
);

</script>

<style></style>
