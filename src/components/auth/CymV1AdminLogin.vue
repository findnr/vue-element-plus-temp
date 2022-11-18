<!--
 * @Author: 程英明
 * @Date: 2022-01-18 14:03:01
 * @LastEditTime: 2022-10-12 15:26:27
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\auth\CymV1AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    
    <div class="index h-screen grid justify-items-center content-center" style="background: linear-gradient(to bottom, #337ecc 50%,#337ecc 50%,#efefef 50%,#efefef 100%)">
        <div class="bg-[#fff] rounded-lg shadow-2xl justify-items-center" style="width: 850px; height: 500px">
            <div class="flex h-full justify-center">
                <div class="h-full w-1/2 pt-14 pl-10 pr-10">
                    <div class="content-center leading-[50px] w-full mt-10 text-center text-[30px]">继续教育后台管理系统</div>
                    <div class="pt-3">
                        <input v-model="forms.name"
                            class="text-sm w-full py-2 px-3 border-2 border-indigo-200 rounded-lg focus:outline-blue-500"
                            placeholder="请输入用户名" />
                    </div>
                    <div class="pt-3">
                        <input type="password" v-model="forms.pwd"
                            class="text-sm w-full py-2 px-3 border-2 border-indigo-200 rounded-lg focus:outline-blue-500"
                            placeholder="请输入密码" />
                    </div>
                    <div class="pt-3 grid grid-cols-2 gap-2 place-items-stretch">
                        <input v-model="forms.code"
                            class="text-sm py-2 px-3 border-2 border-indigo-200 rounded-lg focus:outline-blue-500"
                            placeholder="请输入验证码" />
                        <img :src="code_img.url" alt @click="getNewCode" class="cursor-pointer" />
                    </div>
                    <div class="pt-3 grid grid-cols-2 gap-2 place-items-stretch">
                        <el-button class="bg-[#409eff]" type="primary" size="large" @click="login">确认登录</el-button>
                        <el-button class="bg-[#f56c6c]" type="danger" size="large" @click="reset">重置信息</el-button>
                    </div>
                    <div class="pt-3 grid grid-cols-3 gap-4 place-items-stretch">
                        <el-link href="https://element.eleme.io" target="_blank">注册用户</el-link>
                        <el-link href="https://element.eleme.io" target="_blank">找回密码</el-link>
                        <el-link href="https://element.eleme.io" target="_blank">查看其它信息</el-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { get } from "@/api/code";
import { ElMessage } from 'element-plus'
const emits = defineEmits(['loginFun'])
const forms = reactive({ name: "", pwd: "", code: "" });
const code_img = reactive({ code_key: "", url: "" });
onMounted(() => {
    GET_CODE({}, false);
});
const getNewCode = (msgShow = true) => {
    if (code_img.code_key == "") {
        GET_CODE({}, msgShow);
    } else {
        GET_CODE({ code_key: code_img.code_key }, msgShow);
    }
};
const GET_CODE = (data = {}, msgShow = true) => {
    get("common/code/code", data, msgShow).then((res) => {
        if (res.code == 200) {
            code_img.code_key = res.code_key;
            code_img.url = res.img_base64;
        }
    });
};

const reset = () => {
    for (const key in forms) {
        forms[key] = "";
    }
    getNewCode(false);
};

const login = () => {
    console.log(forms)
    for (const key in forms) {
        if (forms[key] == "") {
            ElMessage.success({
                message: '填写的数据不能为空，请查看！',
                type: 'success',
            })
            return;
        }
    }
    emits('loginFun', { ...forms, code_key: code_img.code_key }
    );
};
const updateCode = () => {
    getNewCode()
}
defineExpose({ updateCode })
</script>

<style scoped lang="scss">
.index {}
</style>

.index {
}
