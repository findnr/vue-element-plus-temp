/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:08:06
 * @LastEditTime: 2021-12-17 10:12:55
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\main.js
 * QQ:504875043@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

import router from "./router"
app.use(router)

import store from './store'
app.use(store)

app.mount('#app')
