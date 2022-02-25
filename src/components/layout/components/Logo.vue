<!--
 * @Author: 张江亮
 * @Date: 2022-02-24 11:49:52
 * @LastEditTime: 2022-02-25 16:27:54
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\Logo.vue
 * @QQ: 123316216@qq.com
-->
<template>
  <div class="el-logo">
    <!-- <img src="@/assets/logo.png" alt="" /> -->
    <span class="title" :class="{ 'is-hide': isHideTitle }"
      >单位会员管理系统</span
    >
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Logo",
  setup() {
    const store = useStore();
    const isHideTitle = computed(() => {
      return store.state.isCollapse;
    });
    return {
      isHideTitle,
    };
  },
};
</script>
