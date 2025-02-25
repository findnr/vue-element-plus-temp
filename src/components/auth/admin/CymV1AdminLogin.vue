<!--
 * @Author: 程英明
 * @Date: 2022-01-18 14:03:01
 * @LastEditTime: 2024-12-15 08:16:22
 * @LastEditors: findnr
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\auth\CymV1AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <!-- 背景动画效果 -->
        <div class="absolute inset-0 overflow-hidden">
            <div v-for="n in 20" :key="n" class="floating-circle"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                }">
            </div>
        </div>

        <div class="relative w-[850px] h-[500px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <!-- 玻璃态装饰效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div class="relative flex h-full justify-center z-10">
                <div class="w-[400px] pt-14 px-10">
                    <div class="mb-8 text-center">
                        <h1 class="text-3xl font-bold text-white mb-2">后台管理系统</h1>
                        <div class="flex justify-center space-x-2">
                            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <div class="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-100"></div>
                            <div class="w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="login-input-group">
                            <input v-model="forms.name"
                                class="w-full h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-blue-400 transition-all outline-none placeholder-white/50"
                                placeholder="请输入用户名" />
                        </div>

                        <div class="login-input-group">
                            <input type="password" v-model="forms.pwd"
                                class="w-full h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-blue-400 transition-all outline-none placeholder-white/50"
                                placeholder="请输入密码" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <input v-model="forms.code"
                                class="h-12 px-4 bg-white/10 text-white rounded-lg border border-white/20 focus:border-blue-400 transition-all outline-none placeholder-white/50"
                                placeholder="请输入验证码" />
                            <img :src="code_img.url" alt="验证码" @click="getNewCode"
                                class="h-12 rounded-lg cursor-pointer hover:opacity-80 transition-all border border-white/20" />
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <button @click="login"
                                class="login-button h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500">
                                <span class="relative z-10">确认登录</span>
                            </button>
                            <button @click="reset"
                                class="login-button h-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg transition-all duration-300 hover:from-red-400 hover:to-red-500">
                                <span class="relative z-10">重置信息</span>
                            </button>
                        </div>

                        <div class="flex justify-between text-sm pt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-white/80 hover:text-white transition-colors">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-white/80 hover:text-white transition-colors">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-white/80 hover:text-white transition-colors">查看其它信息</a>
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
import { reactive, onMounted } from 'vue'

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
.floating-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: float 8s infinite;
}

.login-button {
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

@keyframes float {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-20px) scale(1.1);
        opacity: 0.1;
    }
}
</style>
