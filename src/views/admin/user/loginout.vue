<!--
 * @Author: 程英明
 * @Date: 2022-02-28 14:43:45
 * @LastEditTime: 2024-07-26 09:37:12
 * @LastEditors: findnr
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\user\loginout.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class="index justify-center text-current w-full flex justify-items-center content-center m-[20px]">
    <el-button style="width:80px;height:80px;" type="warning" circle>
      <el-icon class="el-icon" size="50px">
        <Delete />
      </el-icon>
    </el-button>
  </div>
  <div class="index justify-center text-current w-full flex justify-items-center content-center m-[20px]">
    欢迎再次使用系统，退出的系统会删除个人本机缓存信息！</div>
  <div class="index justify-center text-current w-full flex justify-items-center content-center m-[20px]">
    <el-button type="success" @click="quit" round>确认退出</el-button>
  </div>
</template>

<script setup>
import { Local } from "findnrjs"
import { useRouter } from "vue-router"
const router = useRouter();
const quit = () => {
  Local.clear()
  router.push({ path: '/auth/admin' })
}
</script>
<script>
export default { route: { meta: { auth: true, type: 0 } } };
</script>

<style scoped lang="scss">
.index {}
</style>
