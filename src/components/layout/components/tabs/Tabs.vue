<template>
  <div class="tabs-content">
    <div class="tabs-scroll">
      <el-tabs v-model="activeMenu" type="card" @tab-click="handleTag" @tab-remove="handleClose">
        <el-tab-pane
          :closable="!item.unCloseable"
          :name="item.id"
          v-for="(item, index) in tabs"
          :key="index"
          :label="item.name"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <el-dropdown trigger="click">
      <arrow-down class="tabs-svg border-left" />
      <template #dropdown>
        <el-dropdown-menu class="tabs-menu">
          <el-dropdown-item
            :disabled="disabledCurrent"
            @click="handleMenuClose('current')"
            icon="el-icon-close"
          >关闭当前标签页</el-dropdown-item>
          <el-divider></el-divider>
          <el-dropdown-item :disabled="disabledLeft" @click="handleMenuClose('left')">关闭左侧标签页</el-dropdown-item>
          <el-dropdown-item :disabled="disabledRight" @click="handleMenuClose('right')">关闭右侧标签页</el-dropdown-item>
          <el-divider></el-divider>
          <el-dropdown-item :disabled="disabledOther" @click="handleMenuClose('other')">关闭其他标签页</el-dropdown-item>
          <el-dropdown-item :disabled="disabledAll" @click="handleMenuClose('all')">关闭所有标签页</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref, watch } from "vue";
import {
  ArrowDown,
  Close,
  Download,
  DocumentRemove,
  DocumentDelete,
} from "@element-plus/icons-vue";
import { setTabs, getTabs } from "../../../../utils/storage";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const data = reactive({
  left: 0,
  tabs: getTabs(),
  activeMenu: "",
  disabledCurrent: true,
  disabledLeft: true,
  disabledRight: true,
  disabledOther: true,
  disabledAll: true,
});
const {
  tabs,
  activeMenu,
  disabledCurrent,
  disabledLeft,
  disabledRight,
  disabledOther,
  disabledAll,
} = toRefs(data);
data.tabs.forEach((item) => {
  if (item.active) data.activeMenu = item.id;
});

// 点击tab
const handleTag = (obj) => {
  store.commit("getActiveMenu", obj.props.name);
  setTabs(data.tabs, obj.props.name);
  judgeTabs();
  const to_index = data.tabs.findIndex((v) => v.id == obj.props.name);
  if (to_index != -1) {
    router.push({ path: data.tabs[to_index].path });
  }
};

// 关闭tab
const handleClose = (value) => {
  let idx = 0;
  let active = false;
  data.tabs.forEach((item, index) => {
    if (item.id === value) {
      idx = index;
      active = item.active;
    }
  });
  if (active) {
    handleMenuClose("current");
  } else {
    data.tabs.splice(idx, 1);
    setTabs(data.tabs);
    judgeTabs();
  }
};

// 显示tabs菜单
const handleMenuClose = (type) => {
  let tabs = data.tabs;
  let currentIdx = 0;
  let menuId = "";
  tabs.forEach((item, index) => {
    if (item.active) currentIdx = index;
  });
  if (type === "current") {
    currentIdx = currentIdx > 0 ? currentIdx - 1 : currentIdx + 1;
    menuId = tabs[currentIdx]?.id ?? "";
    if (tabs.length == 1) return;
    tabs = tabs.filter((item) => !item.active);
    store.commit("getActiveMenu", menuId);
    router.push(tabs[currentIdx].path)
  } else if (type === "other") {
    tabs = tabs.filter((item) => item.active);
    data.tabs = tabs;
  } else if (type === "all") {
    tabs = tabs.filter((item) => item.unCloseable);
    store.commit("getActiveMenu", "");
  } else {
    let len = tabs.length - 1;
    type === "left"
      ? tabs.splice(0, currentIdx)
      : tabs.splice(currentIdx + 1, len - currentIdx);
  }
  setTabs(tabs, menuId);
  judgeTabs();
};

// 判断是否可关闭导航栏
const judgeTabs = () => {
  let disabledCurrent = true;
  let disabledLeft = true;
  let disabledRight = true;
  let idx = 0;
  let len = data.tabs.length;
  data.tabs.forEach((item, index) => {
    if (item.active && !item.unCloseable) disabledCurrent = false;
    if (item.active) idx = index;
  });
  if (idx > 0) {
    for (let i = 0; i < idx; i++) {
      if (!data.tabs[i].unCloseable) {
        disabledLeft = false;
        break;
      }
    }
  }
  if (idx + 1 < len) {
    for (let i = len; i > idx + 1; i--) {
      if (!data.tabs[i - 1].unCloseable) {
        disabledRight = false;
        break;
      }
    }
  }

  data.disabledCurrent = disabledCurrent;
  data.disabledLeft = disabledLeft;
  data.disabledRight = disabledRight;
  data.disabledOther = disabledLeft && disabledRight;
  data.disabledAll = disabledLeft && disabledRight && disabledCurrent;
};
judgeTabs();

watch(
  () => store.state.activeMenu,
  (value, old) => {
    data.activeMenu = value;
    data.tabs = getTabs();
    judgeTabs();
  }
);
</script>

<style></style>
