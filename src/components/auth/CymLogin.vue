<!--
 * @Author: 程英明
 * @Date: 2022-01-18 14:03:01
 * @LastEditTime: 2024-01-03 20:39:15
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\auth\CymLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center"
        style="background: linear-gradient(to bottom, #337ecc 50%,#337ecc 50%,#efefef 50%,#efefef 100%)">
        <div class="bg-[#fff] rounded-lg shadow-2xl justify-items-center" style="width: 850px; height: 500px">
            <div class="flex h-full">
                <div class="h-full w-1/2 pt-14 pl-10 pr-10">
                    <div class="content-center leading-[50px] w-full mt-10 text-center text-[30px]">用户登录</div>
                    <div class="pt-3">
                        <input v-model="forms.user"
                            class="text-sm w-full py-2 px-3 border-2 border-indigo-200 rounded-lg focus:outline-blue-500"
                            placeholder="请输入用户名" />
                    </div>
                    <div class="pt-3">
                        <input v-model="forms.pwd"
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
                <div class="h-full w-1/2 bg-[#529b2e] rounded-r-lg">
                    <div class="p-2 pt-4 text-gray-200 text-[20px]">
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
                        温馨提示
                    </div>
                    <div class="content text-gray-200 p-4 border-1 border-t border-solid border-blue-gray-800">
                        <div class="inline-block align-text-bottom mt-1">1、测试信息、测试信息、测试信息、</div>
                        <div class="inline-block align-text-bottom mt-1">2、测试信息、测试信息、测试信息、测试信息、</div>
                        <div class="inline-block align-text-bottom mt-1">3、测试信息测试信息测试信息</div>
                        <div class="inline-block align-text-bottom mt-1">4、测试信息、测试信息、测试信息、</div>
                        <div class="inline-block align-text-bottom mt-1">5、联系电话: xxxx-xxxxxx、xxxx-xxxxxx。</div>
                        <div class="inline-block align-text-bottom mt-1">6、会费确认及票据查询: xxxx-xxxxxx。</div>
                        <div class="inline-block align-text-bottom mt-1">7、传真号码: xxxx-xxxxxx。</div>
                        <div>
                            <p class="inline-block align-text-bottom mt-1">8、联系方式 汇款单位及账号。</p>
                            <p class="inline-block align-text-bottom ml-6 mt-1">单位全称: 测试单位信息</p>
                            <p class="inline-block align-text-bottom ml-6 mt-1">开 户 行: 测试支行</p>
                            <p class="inline-block align-text-bottom ml-6 mt-1">账 号: 15645156485456165</p>
                        </div>
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
    for (const key in forms) {
        if (forms[key] == "") {
            ElMessage.success({
                message: '填写的数据不能为空，请查看！',
                type: 'success',
            })
            return;
        }
    }
    emits('loginFun', { ...forms, code_name: code_img.code_key }
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
