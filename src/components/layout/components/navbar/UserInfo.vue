<!--
 * @Author: 程英明
 * @Date: 2022-02-25 11:01:26
 * @LastEditTime: 2022-03-01 16:59:20
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\layout\components\navbar\UserInfo.vue
 * QQ:504875043@qq.com
-->
<template>
  <el-dropdown>
    <div class="header-user">
      <img :src="navbarInfo.img_url == '' ? imgObj : navbarInfo.img_url" alt />
      <span>{{ navbarInfo.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          @click="onClick(v)"
          v-for="(v, i) in navbarInfo.url_list"
          :key="i"
        >{{ v.menuName }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import imgObj from "@/assets/img/user.jpg"
import { useRouter } from "vue-router"
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

defineProps({
  navbarInfo: Object
})

const onClick = (obj) => {
  store.commit("getActiveMenu", obj.menuId);
  router.push(obj.path)
}
</script>

<style lang="scss" scoped>
.header-user {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0 4px;
  cursor: pointer;
  color: #ffffff;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 4px;
  }
}
</style>
