<!--
 * @Author: 程英明
 * @Date: 2022-02-25 11:01:26
 * @LastEditTime: 2022-02-28 15:12:58
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\navbar\FullScreen.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-tooltip class="item" effect="dark" :content="fullscreen ? '退出全屏' : '全屏'" placement="bottom">
    <svg-icon v-if="!fullscreen" name="full-screen-max" @click="handleFullScreen"></svg-icon>
    <svg-icon :sss="fullscreen" v-else name="full-screen-min" @click="handleFullScreen"></svg-icon>
  </el-tooltip>
</template>
<script>
import { reactive, toRefs } from "vue";
import { changeFullScreen, listenerEvent } from "./fullScreen";
export default {
  setup() {
    const data = reactive({
      fullscreen: false,
    });
    listenerEvent(() => {
      data.fullscreen = !data.fullscreen;
    }, data);
    // 全屏切换
    const handleFullScreen = () => changeFullScreen(data);
    const params = toRefs(data);
    return {
      ...params,
      handleFullScreen,
    };
  },
};
</script>

<style></style>
