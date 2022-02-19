/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:08:06
 * @LastEditTime: 2022-01-14 13:47:04
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\main.js
 * QQ:504875043@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'
import setupPlugins from './plugins'

const app = createApp(App)

setupPlugins(app)

import router from "./router"
app.use(router)

import store from './store'
app.use(store)

app.mount('#app')
