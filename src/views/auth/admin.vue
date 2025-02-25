<!--
 * @Author: 程英明
 * @Date: 2022-10-12 14:56:34
 * @LastEditTime: 2022-10-20 16:17:03
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\auth\admin.vue
 * QQ:504875043@qq.com
-->
<template>
  <div class='index'>
    <div class="fixed top-4 right-4 z-50">
      <el-select v-model="currentTemplate" placeholder="选择登录模板" @change="handleTemplateChange" class="bg-white/10 backdrop-blur-sm border border-blue-400/20 rounded-lg">
        <el-option v-for="template in templates" :key="template" :label="template" :value="template" />
      </el-select>
    </div>
    <component :is="currentComponent" @loginFun="login" @codeFun="url"></component>
  </div>
</template>

<script setup>
import { admin } from "../../api/login"
import { setToken } from "../../utils/token"
import { ref, shallowRef, onMounted } from 'vue'

const router = useRouter();
const templates = ref([])
const currentTemplate = ref('CymV1AdminLogin')
const currentComponent = shallowRef('CymV1AdminLogin')

// 获取所有登录模板
const getTemplates = () => {
  // 这里我们假设所有以Cym开头的组件都是登录模板
  const modules = import.meta.glob('@/components/auth/admin/Cym*.vue')
  templates.value = Object.keys(modules).map(key => {
    const name = key.split('/').pop().replace('.vue', '')
    return name
  })
}

// 切换模板
const handleTemplateChange = (template) => {
  currentComponent.value = template
}

const login = (obj) => {
  admin('login/admin/login', obj).then(res => {
    if (res.code == 200) {
      setToken(res.data)
      router.push({ path: '/admin/home/home' })
    }
  })
}

const url = () => {
}

onMounted(() => {
  getTemplates()
})
</script>

<style scoped lang="scss">

.index{}

</style>
