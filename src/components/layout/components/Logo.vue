<!--
 * @Author: 张江亮
 * @Date: 2022-02-24 11:49:52
 * @LastEditTime: 2022-04-25 21:21:43
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\Logo.vue
 * @QQ: 123316216@qq.com
-->
<template>
  <div class="el-logo" style="height:auto;padding:10px;">
    <!-- <img src="@/assets/logo.png" alt="" /> -->
    <span class="title text-center w-full" :class="{ 'is-hide': isHideTitle }" style="white-space:normal;margin:0;">{{titleName}}</span>
  </div>
</template>

<script setup>

defineProps({
  titleName: String,
})
const store = useStore();
const isHideTitle = computed(() => {
  return store.state.isCollapse;
});


</script>
