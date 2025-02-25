<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 极简现代风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV7AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-white relative overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-blue-50 transform skew-x-12 translate-x-20"></div>

        <!-- 动态线条装饰 -->
        <div class="absolute inset-0 overflow-hidden">
            <div v-for="n in 3" :key="n" class="minimal-line"
                :style="{
                    top: `${n * 30}%`,
                    animationDelay: `${n * 0.5}s`
                }">
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative w-[850px] h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden flex">
            <!-- 左侧装饰区域 -->
            <div class="w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex flex-col justify-between">
                <div class="space-y-6">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white">安全管理系统</h2>
                    <p class="text-blue-100">简约 · 高效 · 安全</p>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center space-x-2 text-sm text-blue-100">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>安全加密传输</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-blue-100">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>双重身份认证</span>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-blue-100">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>实时数据备份</span>
                    </div>
                </div>
            </div>

            <!-- 右侧登录区域 -->
            <div class="flex-1 p-8 flex flex-col justify-center">
                <div class="w-full max-w-md mx-auto space-y-6">
                    <div class="minimal-input-group">
                        <input v-model="forms.name"
                            class="w-full h-12 px-4 bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-blue-500 transition-all outline-none"
                            placeholder="请输入用户名" />
                        <div class="minimal-input-line"></div>
                    </div>

                    <div class="minimal-input-group">
                        <input type="password" v-model="forms.pwd"
                            class="w-full h-12 px-4 bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-blue-500 transition-all outline-none"
                            placeholder="请输入密码" />
                        <div class="minimal-input-line"></div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="minimal-input-group">
                            <input v-model="forms.code"
                                class="w-full h-12 px-4 bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-blue-500 transition-all outline-none"
                                placeholder="请输入验证码" />
                            <div class="minimal-input-line"></div>
                        </div>
                        <img :src="code_img.url" alt @click="getNewCode"
                            class="h-12 rounded-lg cursor-pointer hover:opacity-80 transition-all border-2 border-gray-200" />
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <button @click="login"
                            class="minimal-button h-12 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-0.5">
                            确认登录
                        </button>
                        <button @click="reset"
                            class="minimal-button h-12 bg-gray-500 text-white rounded-lg transition-all duration-300 hover:bg-gray-600 transform hover:-translate-y-0.5">
                            重置信息
                        </button>
                    </div>

                    <div class="grid grid-cols-3 gap-4 pt-4">
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors text-center text-sm">注册用户</a>
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors text-center text-sm">找回密码</a>
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors text-center text-sm">查看其它信息</a>
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
.minimal-line {
    position: absolute;
    left: -10%;
    width: 120%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    animation: lineMove 8s linear infinite;
}

@keyframes lineMove {
    0% {
        transform: translateX(-100%) rotate(-45deg);
    }
    100% {
        transform: translateX(100%) rotate(-45deg);
    }
}

.minimal-input-group {
    position: relative;
    
    .minimal-input-line {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        transition: width 0.3s ease, left 0.3s ease;
        transform: translateX(-50%);
    }

    input:focus ~ .minimal-input-line {
        width: 100%;
    }
}

.minimal-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

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