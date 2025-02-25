<!--
 * @Author: 程英明
 * @Date: 2024-01-05 10:00:00
 * @LastEditTime: 2024-01-05 10:00:00
 * @LastEditors: findnr
 * @Description: 智慧城市风格登录界面
 * @FilePath: \vue-element-plus-temp\src\components\auth\admin\CymV9AdminLogin.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class="index h-screen grid justify-items-center content-center bg-gradient-to-br from-[#0a1f3b] to-[#0d2c54] relative overflow-hidden">
        <!-- 3D城市背景 -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 city-3d-grid"></div>
            <div class="absolute bottom-0 left-0 right-0 h-96 city-3d-buildings"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a1f3b] via-transparent to-transparent opacity-90"></div>
        </div>

        <!-- 数据流和粒子效果 -->
        <div class="absolute inset-0 pointer-events-none">
            <!-- 数据流 -->
            <div v-for="n in 20" :key="'stream-'+n" class="data-stream"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${20 + Math.random() * 30}px`,
                    animationDuration: `${Math.random() * 2 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                }">
            </div>
            <!-- 浮动粒子 -->
            <div v-for="n in 30" :key="'particle-'+n" class="floating-particle"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 4 + 4}s`,
                    animationDelay: `${Math.random() * 2}s`
                }">
            </div>
        </div>

        <!-- 登录框 -->
        <div class="relative w-[900px] h-[520px] bg-[#0c2847]/40 backdrop-blur-xl rounded-3xl border border-blue-400/20 shadow-2xl overflow-hidden">
            <!-- 全息效果装饰 -->
            <div class="absolute inset-0 holographic-overlay"></div>
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-30"></div>
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-30"></div>

            <div class="flex h-full">
                <!-- 左侧信息区域 -->
                <div class="w-2/5 bg-gradient-to-br from-[#0c2847] to-[#081c33] p-10 flex flex-col justify-between border-r border-blue-400/10">
                    <div class="space-y-8">
                        <div class="future-city-logo w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                    d="M3 6V5h12v1M3 11h12m-6-5v10m-3 3h12v-4l2-2-2-2V7l2-2-2-2V1h-4m1 20H3v-4l2-2-2-2v-4"></path>
                            </svg>
                        </div>
                        <div class="space-y-3">
                            <h2 class="text-3xl font-bold text-white tracking-wide">数字城市管理中心</h2>
                            <p class="text-cyan-400/90 text-sm tracking-wider">Digital City Management Hub</p>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="future-city-stat">
                            <div class="stat-icon bg-blue-500/10">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <div class="stat-info">
                                <div class="text-sm text-gray-300">实时数据处理</div>
                                <div class="text-xs text-blue-400/80">Processing: 2.5M/s</div>
                            </div>
                        </div>
                        <div class="future-city-stat">
                            <div class="stat-icon bg-cyan-500/10">
                                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <div class="stat-info">
                                <div class="text-sm text-gray-300">系统安全指数</div>
                                <div class="text-xs text-cyan-400/80">Protection: 99.9%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右侧登录区域 -->
                <div class="flex-1 p-12 flex flex-col justify-center">
                    <div class="w-full max-w-md mx-auto space-y-8">
                        <div class="future-city-input-group">
                            <label class="text-sm text-blue-400/90 mb-2 block">管理员账号</label>
                            <input v-model="forms.name"
                                class="w-full h-12 px-4 bg-[#0c2847]/50 text-white rounded-lg border border-blue-500/20 focus:border-blue-400 transition-all outline-none"
                                placeholder="请输入用户名" />
                            <div class="input-line"></div>
                        </div>

                        <div class="future-city-input-group">
                            <label class="text-sm text-blue-400/90 mb-2 block">访问密钥</label>
                            <input type="password" v-model="forms.pwd"
                                class="w-full h-12 px-4 bg-[#0c2847]/50 text-white rounded-lg border border-blue-500/20 focus:border-blue-400 transition-all outline-none"
                                placeholder="请输入密码" />
                            <div class="input-line"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-6">
                            <div class="future-city-input-group">
                                <label class="text-sm text-blue-400/90 mb-2 block">验证码</label>
                                <input v-model="forms.code"
                                    class="w-full h-12 px-4 bg-[#0c2847]/50 text-white rounded-lg border border-blue-500/20 focus:border-blue-400 transition-all outline-none"
                                    placeholder="请输入验证码" />
                                <div class="input-line"></div>
                            </div>
                            <div class="pt-8">
                                <img :src="code_img.url" alt="验证码" @click="getNewCode"
                                    class="h-12 w-full rounded-lg cursor-pointer hover:opacity-80 transition-all border border-blue-500/20 z-10 relative" />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-6 mt-4">
                            <button @click="login"
                                class="future-city-button h-12 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg transition-all duration-300 hover:from-blue-400 hover:to-cyan-300">
                                <span class="relative z-10">确认登录</span>
                            </button>
                            <button @click="reset"
                                class="future-city-button h-12 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg transition-all duration-300 hover:from-gray-600 hover:to-gray-500">
                                <span class="relative z-10">重置信息</span>
                            </button>
                        </div>

                        <div class="flex justify-between text-sm pt-6">
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400/80 hover:text-blue-300 transition-colors">注册账号</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400/80 hover:text-blue-300 transition-colors">找回密码</a>
                            <a href="https://element.eleme.io" target="_blank"
                                class="text-blue-400/80 hover:text-blue-300 transition-colors">帮助中心</a>
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
.city-3d-grid {
    background-image: linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(60deg);
    animation: gridMove 20s linear infinite;
}

.city-3d-buildings {
    background-image: url("data:image/svg+xml,%3Csvg width='400' height='300' viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 300V180h30v40h20v-60h25v60h30v-40h20v80h25v-60h30v40h20v-80h25v60h30v-40h20v80h25v-60h30v40h20v-80h25v60h25v-40h20v120H0z' fill='%230369a1' fill-opacity='0.2'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    animation: buildingsMove 20s linear infinite;
}

.data-stream {
    position: absolute;
    background: linear-gradient(to bottom, transparent, #4a9fff, transparent);
    opacity: 0.3;
    animation: streamMove linear infinite;
}

.floating-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #4a9fff;
    border-radius: 50%;
    opacity: 0.3;
    animation: particleFloat ease-in-out infinite;
}

.holographic-overlay {
    background: linear-gradient(45deg, transparent 40%, rgba(74, 159, 255, 0.1) 45%, transparent 50%);
    animation: holographicScan 3s linear infinite;
}

.future-city-stat {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background: rgba(74, 159, 255, 0.05);
}

.stat-icon {
    padding: 0.75rem;
    border-radius: 0.5rem;
}

.future-city-input-group {
    position: relative;
}

.input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #4a9fff, #06b6d4);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.future-city-button {
    position: relative;
    overflow: hidden;
}

.future-city-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
}

.future-city-button:hover::before {
    left: 100%;
}

@keyframes gridMove {
    from { background-position: 0 0; }
    to { background-position: 40px 40px; }
}

@keyframes buildingsMove {
    from { background-position: 400px bottom; }
    to { background-position: 0 bottom; }
}

@keyframes streamMove {
    from { transform: translateY(-100%); }
    to { transform: translateY(100%); }
}

@keyframes particleFloat {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(10px, -10px); }
}

@keyframes holographicScan {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
</style>