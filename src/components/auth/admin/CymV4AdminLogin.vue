<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: AI风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV4AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative overflow-hidden">
        <!-- 神经网络背景动画 -->
        <div class="absolute inset-0">
            <div v-for="n in 30" :key="n" class="neural-node"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                }">
                <div class="neural-connection"
                    :style="{
                        width: `${Math.random() * 150 + 50}px`,
                        transform: `rotate(${Math.random() * 360}deg)`
                    }">
                </div>
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative bg-[#1e293b]/90 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-2xl"
            style="width: 850px; height: 500px">
            <!-- AI光效装饰 -->
            <div class="absolute -top-10 -left-10 w-20 h-20 bg-indigo-500/20 rounded-full filter blur-xl animate-pulse"></div>
            <div class="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>

            <div class="flex h-full justify-center items-center p-10">
                <div class="w-full max-w-md">
                    <div class="text-center mb-8">
                        <div class="mb-4">
                            <div class="inline-block p-3 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h1 class="text-3xl font-bold text-white mb-2">AI智能管理系统</h1>
                        <p class="text-indigo-300/60">智能化 · 高效 · 安全</p>
                    </div>

                    <div class="space-y-6">
                        <div class="ai-input-group">
                            <input v-model="forms.name"
                                class="w-full py-3 px-4 bg-[#2a3b52]/50 text-white rounded-lg border-2 border-indigo-500/30 focus:border-indigo-500 transition-all outline-none"
                                placeholder="请输入用户名" />
                            <div class="ai-input-effect"></div>
                        </div>

                        <div class="ai-input-group">
                            <input type="password" v-model="forms.pwd"
                                class="w-full py-3 px-4 bg-[#2a3b52]/50 text-white rounded-lg border-2 border-indigo-500/30 focus:border-indigo-500 transition-all outline-none"
                                placeholder="请输入密码" />
                            <div class="ai-input-effect"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="ai-input-group">
                                <input v-model="forms.code"
                                    class="w-full py-3 px-4 bg-[#2a3b52]/50 text-white rounded-lg border-2 border-indigo-500/30 focus:border-indigo-500 transition-all outline-none"
                                    placeholder="请输入验证码" />
                                <div class="ai-input-effect"></div>
                            </div>
                            <img :src="code_img.url" alt @click="getNewCode"
                                class="h-full rounded-lg cursor-pointer hover:opacity-80 transition-all border-2 border-indigo-500/30" />
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <button @click="login"
                                class="ai-button py-3 px-6 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-0.5">
                                <span class="relative z-10">确认登录</span>
                            </button>
                            <button @click="reset"
                                class="ai-button py-3 px-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-0.5">
                                <span class="relative z-10">重置信息</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 mt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-indigo-400 hover:text-indigo-300 transition-colors text-center hover:underline">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-indigo-400 hover:text-indigo-300 transition-colors text-center hover:underline">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-indigo-400 hover:text-indigo-300 transition-colors text-center hover:underline">查看其它信息</a>
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
.neural-node {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(99, 102, 241, 0.5);
    border-radius: 50%;
    animation: pulse 2s infinite;

    .neural-connection {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), transparent);
        transform-origin: left center;
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.5);
        opacity: 1;
    }
}

.ai-input-group {
    position: relative;
    
    .ai-input-effect {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 1), transparent);
        transition: width 0.3s ease;
        transform: translateX(-50%);
    }

    input:focus + .ai-input-effect {
        width: 100%;
    }
}

.ai-button {
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
}
</style>