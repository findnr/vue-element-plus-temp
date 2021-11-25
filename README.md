<!--
 * @Author: 程英明
 * @Date: 2021-11-25 09:02:21
 * @LastEditTime: 2021-11-25 09:46:37
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-puls-temp\README.md
 * QQ:504875043@qq.com
-->
# Vue 3 + Vite
```shell
git clone https://github.com/findnr/vue-element-plus-temp.git
cd vue-element-plus-temp
npm install
npm run dev
```
# 此项目创建的流程如下
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


