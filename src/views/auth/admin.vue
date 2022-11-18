<!--
 * @Author: 程英明
 * @Date: 2022-10-12 14:56:34
 * @LastEditTime: 2022-10-20 16:17:03
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\auth\admin.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
    <CymV1AdminLogin @loginFun="login" @codeFun="url"></CymV1AdminLogin>
  </div>
</template>

<script setup>
import {admin} from "../../api/login"
import {setToken} from "../../utils/token"
const router = useRouter();
const login = (obj) => {
   admin('login/admin/login',obj).then(res=>{
    if(res.code == 200){
      setToken(res.data)
      router.push({path:'/admin/home/home'});
    }
   })
}
const url = () => {

}
</script>

<style scoped lang="scss">

.index{}

</style>
