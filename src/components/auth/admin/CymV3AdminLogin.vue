<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 大数据风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV3AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
        <!-- 六边形背景网格 -->
        <div class="absolute inset-0 hexagon-bg"></div>

        <!-- 数据流动画效果 -->
        <div class="absolute inset-0 pointer-events-none">
            <div v-for="n in 20" :key="n" 
                class="data-stream"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                }">
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative bg-[#1a1a2e]/80 backdrop-blur-lg rounded-xl border border-[#4a9fff]/30 shadow-2xl" 
            style="width: 850px; height: 500px">
            <div class="flex h-full justify-center items-center p-10">
                <div class="w-full max-w-md">
                    <div class="text-center mb-8">
                        <h1 class="text-4xl font-bold text-white mb-2">数据管理中心</h1>
                        <div class="flex justify-center items-center space-x-2">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <p class="text-[#4a9fff]">智能数据分析平台</p>
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="data-input-container">
                            <input v-model="forms.name"
                                class="w-full py-3 px-4 bg-[#252a3d]/50 text-white rounded-lg border-2 border-[#4a9fff]/30 focus:border-[#4a9fff] transition-all outline-none"
                                placeholder="请输入用户名" />
                            <div class="data-input-effect"></div>
                        </div>

                        <div class="data-input-container">
                            <input type="password" v-model="forms.pwd"
                                class="w-full py-3 px-4 bg-[#252a3d]/50 text-white rounded-lg border-2 border-[#4a9fff]/30 focus:border-[#4a9fff] transition-all outline-none"
                                placeholder="请输入密码" />
                            <div class="data-input-effect"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="data-input-container">
                                <input v-model="forms.code"
                                    class="w-full py-3 px-4 bg-[#252a3d]/50 text-white rounded-lg border-2 border-[#4a9fff]/30 focus:border-[#4a9fff] transition-all outline-none"
                                    placeholder="请输入验证码" />
                                <div class="data-input-effect"></div>
                            </div>
                            <img :src="code_img.url" alt @click="getNewCode" 
                                class="h-full rounded-lg cursor-pointer hover:opacity-80 transition-all border-2 border-[#4a9fff]/30" />
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <button @click="login"
                                class="login-btn py-3 px-6 bg-gradient-to-r from-[#4a9fff] to-[#2d71b5] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                                <span class="relative z-10">确认登录</span>
                            </button>
                            <button @click="reset"
                                class="reset-btn py-3 px-6 bg-gradient-to-r from-[#ff4a4a] to-[#b52d2d] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-0.5">
                                <span class="relative z-10">重置信息</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 mt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-[#4a9fff] hover:text-[#6ab1ff] transition-colors text-center hover:underline">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-[#4a9fff] hover:text-[#6ab1ff] transition-colors text-center hover:underline">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-[#4a9fff] hover:text-[#6ab1ff] transition-colors text-center hover:underline">查看其它信息</a>
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
.hexagon-bg {
    background-color: #1a1a2e;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='%234a9fff10' stroke-width='1'/%3E%3C/svg%3E");
    background-size: 60px 60px;
    animation: bgScroll 30s linear infinite;
}

@keyframes bgScroll {
    from { background-position: 0 0; }
    to { background-position: 60px 60px; }
}

.data-stream {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #4a9fff, transparent);
    animation: dataFlow 3s linear infinite;
}

@keyframes dataFlow {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}

.data-input-container {
    position: relative;
    
    .data-input-effect {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #4a9fff, transparent);
        transition: width 0.3s ease;
        transform: translateX(-50%);
    }

    input:focus + .data-input-effect {
        width: 100%;
    }
}

.login-btn, .reset-btn {
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