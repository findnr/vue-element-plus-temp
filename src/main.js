/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:08:06
 * @LastEditTime: 2021-11-25 09:40:47
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-puls-temp\src\main.js
 * QQ:504875043@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)

app.mount('#app')
