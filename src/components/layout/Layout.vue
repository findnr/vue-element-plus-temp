<!--
 * @Author: your name
 * @Date: 2022-02-26 14:53:32
 * @LastEditTime: 2022-03-01 10:20:18
 * @LastEditors: 程英明
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-element-plus-temp\src\components\layout\Layout.vue
-->
<template>
  <el-container v-if="navbarType === '左侧菜单模式'">
    <el-aside :width="sidebarWidth">
      <sidebar :showLogo="true" :menuList="menuList"></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar :navbarInfo="navbarInfo"></navbar>
      </el-header>
      <tabs></tabs>
      <el-main>
        <slot name="home"></slot>
      </el-main>
    </el-container>
  </el-container>
  <el-container v-else-if="navbarType === '顶部菜单混合模式'">
    <el-header>
      <navbar :showLogo="true" :navbarInfo="navbarInfo"></navbar>
    </el-header>
    <el-container>
      <el-aside :width="sidebarWidth">
        <sidebar :menuList="menuList"></sidebar>
      </el-aside>
      <el-container direction="vertical">
        <tabs></tabs>
        <main class="el-main">
          <slot name="home"></slot>
        </main>
      </el-container>
    </el-container>
  </el-container>

  <el-container v-else-if="navbarType === '顶部菜单模式'">
    <el-header>
      <navbar :showLogo="true" :navbarInfo="navbarInfo">
        <template v-slot:sidebar>
          <sidebar mode="horizontal" :menuList="menuList"></sidebar>
        </template>
      </navbar>
    </el-header>
    <el-container direction="vertical">
      <tabs></tabs>
      <el-main>
        <slot name="home"></slot>
      </el-main>
    </el-container>
  </el-container>

  <el-container v-else>
    <el-aside width="80px">
      <sidebar :showLogo="true" :collapse="true" :menuList="menuList"></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar :navbarInfo="navbarInfo"></navbar>
      </el-header>
      <tabs></tabs>
      <el-main>
        <slot name="home"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  menuList: Array,
  navbarInfo: Object,
});
const { menuList, navbarInfo } = toRefs(props);

const route = useRoute();
const store = useStore();

// 获取当前路径
const currentPath = computed(() => {
  return route.path;
});

// 导航栏类型
const navbarType = computed(() => {
  return store.state.navbarType;
});

// 是否折叠菜单
const isCollapse = computed(() => {
  return store.state.isCollapse;
});

// 侧边栏宽度
const sidebarWidth = computed(() => {
  return store.state.isCollapse ? "64px" : "200px";
});
</script>

<style></style>
