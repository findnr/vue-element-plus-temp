<!--
 * @Author: 程英明
 * @Date: 2021-11-25 09:02:21
 * @LastEditTime: 2021-12-02 10:04:48
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\README.md
 * QQ:504875043@qq.com
-->
# Vue 3 + Vite
vit+vue3 使用element-plus创建的模板，包含axios ,vue-router4,vuex4,等常用组件，构建一个模板，方便使用开发。只须要 git clone https://github.com/findnr/vue-element-plus-temp.git 。再使用npm install 。就可以进行开发了。文件里面已经构建好了route文件，vuex文件，axios封装的接口等，具体的封装可以看项目的创建流程。
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
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

import router from "./router"
app.use(router)

app.mount('#app')
```
## 创建文件
在src目录下
api (接口开发文件)
config (配制文件)
router (路由相关文件)
store (vuex相关文件)
utils (常用的一些工具文件)
views (页面文件)
## 打包设置
#### 文件名按时间戳打包css js index文件，开发模式为(/)，线上模式(./) 修改vite.config.js
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const timestamp = new Date().getTime();
// https://vitejs.dev/config/
export default defineConfig({
    //开发模式用('./')线上用(/)
  base: process.env.NODE_ENV == 'development' ? './' : '/',
  plugins: [vue()],
  //打包文件按时间戳命名
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${timestamp}.js`,
        chunkFileNames: `assets/[name].${timestamp}.js`,
        assetFileNames: `assets/[name].${timestamp}.[ext]`
      }
    }
  }
})
```
#### 配制端口和启动时间打开浏览器IP地址
```javascript
//代码放到default defineConfig({})里面
server: {
    port: 3000,
    open: true,
    host: '0.0.0.0'
  },
```


