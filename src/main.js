/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:08:06
 * @LastEditTime: 2022-04-25 09:19:39
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\main.js
 * QQ:504875043@qq.com
 */
import { createApp } from 'vue'
import App from './App.vue'
import setupPlugins from './plugins'

import './assets/css/layout.scss'
import './assets/css/custom.scss'


const app = createApp(App)
setupPlugins(app)

import router from "./router"
app.use(router)

import store from './store'
app.use(store)

import { createPinia } from 'pinia'
app.use(createPinia())

app.mount('#app')
