<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 企业级商务风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV8AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 opacity-30">
                <div v-for="n in 3" :key="n" class="enterprise-line"
                    :style="{
                        top: `${n * 30}%`,
                        animationDelay: `${n * 1}s`
                    }">
                </div>
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative w-[850px] h-[500px] bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
            <!-- 左侧品牌区域 -->
            <div class="absolute left-0 top-0 bottom-0 w-[300px] bg-gradient-to-br from-gray-800 to-gray-900 p-10 flex flex-col justify-between">
                <div>
                    <div class="enterprise-logo w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-2">企业管理平台</h2>
                    <p class="text-gray-400 text-sm">专业 · 安全 · 可靠</p>
                </div>

                <div class="space-y-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <div class="text-sm">
                            <div class="text-gray-300 font-medium">安全防护</div>
                            <div class="text-gray-500">多重加密保护</div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div class="text-sm">
                            <div class="text-gray-300 font-medium">高效运行</div>
                            <div class="text-gray-500">快速响应处理</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧登录区域 -->
            <div class="ml-[300px] p-10 flex flex-col justify-center h-full">
                <div class="w-full max-w-md space-y-6">
                    <div class="enterprise-input-group">
                        <label class="text-sm text-gray-400 mb-1 block">用户名</label>
                        <input v-model="forms.name"
                            class="w-full h-12 px-4 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-blue-500 transition-all outline-none"
                            placeholder="请输入用户名" />
                        <div class="enterprise-input-line"></div>
                    </div>

                    <div class="enterprise-input-group">
                        <label class="text-sm text-gray-400 mb-1 block">密码</label>
                        <input type="password" v-model="forms.pwd"
                            class="w-full h-12 px-4 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-blue-500 transition-all outline-none"
                            placeholder="请输入密码" />
                        <div class="enterprise-input-line"></div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="enterprise-input-group">
                            <label class="text-sm text-gray-400 mb-1 block">验证码</label>
                            <input v-model="forms.code"
                                class="w-full h-12 px-4 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-blue-500 transition-all outline-none"
                                placeholder="请输入验证码" />
                            <div class="enterprise-input-line"></div>
                        </div>
                        <div class="pt-6">
                            <img :src="code_img.url" alt @click="getNewCode"
                                class="h-12 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all border border-gray-700" />
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <button @click="login"
                            class="enterprise-button h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800">
                            确认登录
                        </button>
                        <button @click="reset"
                            class="enterprise-button h-12 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg transition-all duration-300 hover:from-gray-800 hover:to-gray-900">
                            重置信息
                        </button>
                    </div>

                    <div class="flex justify-between text-sm pt-4">
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors">注册用户</a>
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors">找回密码</a>
                        <a href="https://element.eleme.io" target="_blank"
                            class="text-gray-500 hover:text-blue-500 transition-colors">查看其它信息</a>
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
.enterprise-line {
    position: absolute;
    left: -10%;
    width: 120%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
    animation: enterpriseLineMove 10s linear infinite;
}

@keyframes enterpriseLineMove {
    0% {
        transform: translateX(-100%) rotate(-30deg);
    }
    100% {
        transform: translateX(100%) rotate(-30deg);
    }
}

.enterprise-logo {
    position: relative;
    &::after {
        content: '';
        position: absolute;
        inset: -1px;
        background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent);
        border-radius: inherit;
        animation: logoPulse 2s linear infinite;
    }
}

@keyframes logoPulse {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
}

.enterprise-input-group {
    position: relative;
    
    .enterprise-input-line {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #2563eb, transparent);
        transition: width 0.3s ease;
        transform: translateX(-50%);
    }

    input:focus ~ .enterprise-input-line {
        width: 100%;
    }
}

.enterprise-button {
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