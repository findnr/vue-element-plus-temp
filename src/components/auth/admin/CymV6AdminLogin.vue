<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 未来科技风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV6AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-[#000] relative overflow-hidden">
        <!-- 全息网格背景 -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 grid-bg"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-[#000]"></div>
        </div>

        <!-- 3D几何装饰 -->
        <div v-for="n in 5" :key="n" 
            class="absolute w-40 h-40 geometric-shape"
            :style="{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`,
                animationDelay: `${Math.random() * 5}s`
            }">
        </div>

        <!-- 登录框 -->
        <div class="relative w-[850px] h-[500px] bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden holographic-container">
            <!-- 全息效果装饰 -->
            <div class="absolute inset-0 holographic-overlay"></div>

            <div class="relative flex h-full justify-center items-center p-10 z-10">
                <div class="w-full max-w-md space-y-8">
                    <div class="text-center">
                        <div class="cyber-circle mx-auto mb-6"></div>
                        <h2 class="text-3xl font-bold text-cyan-400 tracking-wider mb-2 cyber-text">未来管理系统</h2>
                        <p class="text-cyan-300/60 tracking-widest">FUTURE MANAGEMENT SYSTEM</p>
                    </div>

                    <div class="space-y-6">
                        <div class="cyber-input-group">
                            <input v-model="forms.name"
                                class="w-full h-12 px-4 bg-black/50 text-cyan-300 rounded-lg border border-cyan-500/30 focus:border-cyan-400 transition-all outline-none placeholder-cyan-600"
                                placeholder="系统账号验证" />
                            <div class="cyber-input-effect"></div>
                        </div>

                        <div class="cyber-input-group">
                            <input type="password" v-model="forms.pwd"
                                class="w-full h-12 px-4 bg-black/50 text-cyan-300 rounded-lg border border-cyan-500/30 focus:border-cyan-400 transition-all outline-none placeholder-cyan-600"
                                placeholder="安全密钥输入" />
                            <div class="cyber-input-effect"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="cyber-input-group">
                                <input v-model="forms.code"
                                    class="w-full h-12 px-4 bg-black/50 text-cyan-300 rounded-lg border border-cyan-500/30 focus:border-cyan-400 transition-all outline-none placeholder-cyan-600"
                                    placeholder="验证码确认" />
                                <div class="cyber-input-effect"></div>
                            </div>
                            <img :src="code_img.url" alt @click="getNewCode"
                                class="h-12 rounded-lg cursor-pointer hover:opacity-80 transition-all border border-cyan-500/30 hover:border-cyan-400" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button @click="login"
                                class="cyber-button h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 transform hover:scale-105">
                                <span class="relative z-10">系统登录</span>
                            </button>
                            <button @click="reset"
                                class="cyber-button h-12 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg transition-all duration-300 hover:from-red-500 hover:to-pink-500 transform hover:scale-105">
                                <span class="relative z-10">重置信息</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 pt-4">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-cyan-500 hover:text-cyan-400 transition-colors text-center hover:underline tracking-wider">注册用户</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-cyan-500 hover:text-cyan-400 transition-colors text-center hover:underline tracking-wider">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-cyan-500 hover:text-cyan-400 transition-colors text-center hover:underline tracking-wider">查看其它信息</a>
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
.grid-bg {
    background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    transform: perspective(500px) rotateX(60deg);
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 0 20px; }
}

.geometric-shape {
    border: 1px solid rgba(0, 255, 255, 0.3);
    animation: rotate3D 10s linear infinite;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
    }
}

@keyframes rotate3D {
    0% { transform: rotate3d(1, 1, 1, 0deg); }
    100% { transform: rotate3d(1, 1, 1, 360deg); }
}

.holographic-container {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        inset: -1px;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
        animation: holographicScan 3s linear infinite;
    }
}

.holographic-overlay {
    background: radial-gradient(circle at 50% -20%, rgba(0, 255, 255, 0.1), transparent 70%);
}

@keyframes holographicScan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.cyber-circle {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(0, 255, 255, 0.3);
    border-radius: 50%;
    position: relative;
    &::before, &::after {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: rgba(0, 255, 255, 0.8);
        animation: spinCircle 3s linear infinite;
    }
    &::after {
        animation-delay: -1.5s;
    }
}

@keyframes spinCircle {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.cyber-text {
    position: relative;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.cyber-input-group {
    position: relative;
    
    .cyber-input-effect {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #0ff, transparent);
        transition: width 0.3s ease;
    }

    input:focus ~ .cyber-input-effect {
        width: 100%;
    }
}

.cyber-button {
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover::before {
        opacity: 1;
    }
}
</style>