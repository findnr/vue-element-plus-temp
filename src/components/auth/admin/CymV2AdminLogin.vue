<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 科技感登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV2AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-[#0a192f] relative overflow-hidden">
        <!-- 动态背景效果 -->
        <div class="absolute inset-0">
            <div v-for="n in 50" :key="n" 
                class="particle absolute rounded-full"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: `rgba(64, 158, 255, ${Math.random() * 0.5 + 0.2})`
                }">
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative bg-[#1a2942] rounded-lg shadow-2xl backdrop-blur-sm border border-blue-400/30" 
            style="width: 850px; height: 500px">
            <!-- 霓虹灯效果边框 -->
            <div class="absolute inset-0 rounded-lg glow-border"></div>

            <div class="flex h-full justify-center items-center p-8">
                <div class="w-full max-w-md space-y-6">
                    <div class="text-center">
                        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">后台管理系统</h1>
                        <p class="mt-2 text-blue-300/60">未来科技，智能管理</p>
                    </div>

                    <div class="space-y-4">
                        <div class="relative">
                            <input v-model="forms.name"
                                class="w-full py-3 px-4 bg-[#2a3b52] text-blue-100 rounded-lg border border-blue-400/30 focus:outline-none focus:border-blue-400 transition-all"
                                placeholder="请输入用户名" />
                            <div class="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300"
                                :style="{ width: forms.name ? '100%' : '0%' }"></div>
                        </div>

                        <div class="relative">
                            <input type="password" v-model="forms.pwd"
                                class="w-full py-3 px-4 bg-[#2a3b52] text-blue-100 rounded-lg border border-blue-400/30 focus:outline-none focus:border-blue-400 transition-all"
                                placeholder="请输入密码" />
                            <div class="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300"
                                :style="{ width: forms.pwd ? '100%' : '0%' }"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="relative">
                                <input v-model="forms.code"
                                    class="w-full py-3 px-4 bg-[#2a3b52] text-blue-100 rounded-lg border border-blue-400/30 focus:outline-none focus:border-blue-400 transition-all"
                                    placeholder="请输入验证码" />
                                <div class="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300"
                                    :style="{ width: forms.code ? '100%' : '0%' }"></div>
                            </div>
                            <img :src="code_img.url" alt @click="getNewCode" 
                                class="h-full w-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button @click="login"
                                class="py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
                                确认登录
                            </button>
                            <button @click="reset"
                                class="py-3 px-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                                重置信息
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400 hover:text-blue-300 transition-colors text-center">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400 hover:text-blue-300 transition-colors text-center">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400 hover:text-blue-300 transition-colors text-center">查看其它信息</a>
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
.particle {
    animation: float 3s infinite ease-in-out;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.5;
    }
    50% {
        transform: translateY(-20px) scale(1.2);
        opacity: 1;
    }
}

.glow-border {
    &::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, #4099ff, #00ffff, #4099ff);
        border-radius: inherit;
        z-index: -1;
        animation: borderGlow 3s linear infinite;
    }
}

@keyframes borderGlow {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
</style>