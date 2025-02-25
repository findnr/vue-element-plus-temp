<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 现代商务风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV5AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <!-- 动态背景效果 -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 animate-gradient"></div>
            <div class="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>

        <!-- 装饰性圆形 -->
        <div class="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <!-- 登录框 -->
        <div class="relative w-[850px] h-[500px] bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            <!-- 玻璃态装饰效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

            <div class="relative flex h-full justify-center items-center p-10">
                <div class="w-full max-w-md space-y-8">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold text-white tracking-tight mb-2">企业管理平台</h2>
                        <p class="text-gray-400">专业 · 高效 · 安全可靠</p>
                    </div>

                    <div class="mt-8 space-y-6">
                        <div class="modern-input-group">
                            <input v-model="forms.name"
                                class="w-full h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-white/40 transition-all outline-none placeholder-gray-400"
                                placeholder="请输入用户名" />
                            <div class="input-line"></div>
                        </div>

                        <div class="modern-input-group">
                            <input type="password" v-model="forms.pwd"
                                class="w-full h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-white/40 transition-all outline-none placeholder-gray-400"
                                placeholder="请输入密码" />
                            <div class="input-line"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="modern-input-group">
                                <input v-model="forms.code"
                                    class="w-full h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-white/40 transition-all outline-none placeholder-gray-400"
                                    placeholder="请输入验证码" />
                                <div class="input-line"></div>
                            </div>
                            <img :src="code_img.url" alt @click="getNewCode"
                                class="h-12 rounded-lg cursor-pointer hover:opacity-80 transition-all border border-white/20" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button @click="login"
                                class="modern-button h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5">
                                确认登录
                            </button>
                            <button @click="reset"
                                class="modern-button h-12 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg transition-all duration-300 hover:from-red-700 hover:to-pink-700 transform hover:-translate-y-0.5">
                                重置信息
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-gray-400 hover:text-white transition-colors text-center hover:underline">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-gray-400 hover:text-white transition-colors text-center hover:underline">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-gray-400 hover:text-white transition-colors text-center hover:underline">查看其它信息</a>
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
import { reactive } from 'vue'

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
    emits('loginFun', { ...forms, code_key: code_img.code_key });
};

const updateCode = () => {
    getNewCode()
}

defineExpose({ updateCode })
</script>

<style scoped lang="scss">
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
}

.modern-input-group {
    position: relative;
    
    .input-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #60a5fa, #818cf8);
        transition: width 0.3s ease;
    }

    input:focus ~ .input-line {
        width: 100%;
    }
}

.modern-button {
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 50%);
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover::after {
        opacity: 1;
    }
}
</style>