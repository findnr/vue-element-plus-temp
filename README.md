<!--
 * @Author: 程英明
 * @Date: 2021-11-25 09:02:21
 * @LastEditTime: 2021-11-25 09:39:17
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-puls-temp\README.md
 * QQ:504875043@qq.com
-->
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
# 安装的相关插件
## 安装vue-router@4
```shell
npm install vue-router@4 --save
```
## 安装vuex@next
```shell
npm install vuex@next --save
```
## 安装element-plus
```shell
npm install element-plus --save
```
## 安装axios qs
```shell
npm install axios --save
npm install qs --save
```
## 安装sass (此扩展是为了支持 scss)
```shell
npm install --save-dev sass
```
# 全局引入element-plus
src/main.js文件中的内容删除增加以下内容
```javascript
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)

app.mount('#app')
```


