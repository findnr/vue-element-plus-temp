<!--
 * @Author: 程英明
 * @Date: 2021-11-25 09:02:21
 * @LastEditTime: 2021-11-25 10:17:12
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\README.md
 * QQ:504875043@qq.com
-->
# Vue 3 + Vite
vit+vue3 使用element-plus创建的模板，包含axios ,vue-router4,vuex,等常用组件，构建一个模板，方便使用开发。只须要 git clone https://github.com/findnr/vue-element-plus-temp.git 。再使用npm install 。就可以进行开发了。文件里面已经构建好了route文件，vuex文件，axios封装的接口等，具体的封装可以看项目的创建流程。
```shell
git clone https://github.com/findnr/vue-element-plus-temp.git
cd vue-element-plus-temp
npm install
npm run dev
```
# 此项目创建的流程如下 （后边的安装与操作都不须要手动操作，npm install 就已经安装好插件，修改的文件已经修改好了。）
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
## 创建文件
在src目录下
api (接口开发文件)
config (配制文件)
route (路由相关文件)
vuex (vuex相关文件)


