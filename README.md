<!--
 * @Author: 程英明
 * @Date: 2021-11-25 09:02:21
 * @LastEditTime: 2024-09-27 09:33:43
 * @LastEditors: findnr
 * @Description: 
 * @FilePath: \vue-element-plus-temp\README.md
 * QQ:504875043@qq.com
-->
# Vue Element Plus Admin 登录模板
## 项目已经开始使用deepseek,openai,claude,gemini,grok3等相关在模型写，使用的编辑器是trae接入openai,claude,并且是免费使用，真的好高效，只提供思想，写代码超快。
## 项目简介
本项目提供了一套基于Vue 3和Element Plus的后台管理系统登录模板集合，包含多种风格的登录界面，可根据需求灵活切换。

## 测试地址
请大家不要更改管理员帐号和密码：帐号：admin 密码：123456 （后台接口github的地址：https://github.com/findnr/thinkphp_api ）
- 后台测试：https://demo.findbox.icu/#/auth/admin
- 前台测试：正在开中！！！

# Vue 3 + Vite
vit+vue3 使用element-plus创建的模板，包含axios ,vue-router4,vuex4,等常用组件，构建一个模板，方便使用开发。只须要 git clone https://github.com/findnr/vue-element-plus-temp.git 。再使用npm install 。就可以进行开发了。文件里面已经构建好了route文件，vuex文件，axios封装的接口等，具体的封装可以看项目的创建流程。
```shell
git clone https://github.com/findnr/vue-element-plus-temp.git
cd vue-element-plus-temp
npm install
npm run dev
```
#### 20240421更新(更新了所有最新的依赖)
```sh
pnpm up --latest
```
- import MdEditor from 'md-editor-v3'更改了成：import { MdEditor } from 'md-editor-v3'
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
## 安装path (此扩展是做@作为src/这个目录)
```shell
npm install --save-dev path
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
#### 配制页面中引入使用'@'
```javascript
//代码放到default defineConfig({})里面
resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
},
```
#### tailwindcss安装及配制（https://tailwindcss.com/docs/guides/vite）
```
//安装
npm install -D tailwindcss postcss autoprefixer
//生成配制文件
npx tailwindcss init -p

```
### 自动路由（src/router）路由守卫、自动模板加载（plugins/component）
### 构建使用不同的配制参数（.env .env.builds env.github ,vite.config.js）这些文件有变化
### pinia支持
```shell
#安装
pnmp add pinia
#在main.js引入
import { createPinia } from 'pinia'
app.use(createPinia())
```
### unplugin-auto-import/vite 自动导入vue3/vue-router/pinia Api
```shell
pnpm add unplugin-auto-import -D
```
```shell
#vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
plugins: [AutoImports()]
```
### 接口使用默认是有弹框的可以定义不显示弹框
```js
import http from "../utils/axios"
//这样设置就不会出弹框
http.msgShow = false
```
### 编辑器 https://github.com/vueup/vue-quill
```sh
pnpm add quill
```
- 编辑器模板（CymQuillEditor）
```sh
pnpm add md-editor-v3
#使用语言、预览主题扩展库：
pnpm add @vavt/md-editor-extension
```
- 编辑器模板（CymMdEditor）
### echart可视化图表库 https://echarts.apache.org/
```sh
pnpm add echarts --save
```
### xlsx库，操作表格 https://github.com/SheetJS/sheetjs
```sh
pnpm add xlsx --save
```
- 导入数据的功能模板（XlsxToJson）,必须传一个getJson的方法，模板中有清楚文件重置表单方法，clean();
### 表格布局 https://vxetable.cn/#/table/start/install 常用工具：https://github.com/x-extends/xe-utils
```sh
pnpm add xe-utils vxe-table
```
### 使用vueuse库 
```sh
pnpm add @vueuse/core --save
```
### 模板
- 方块展示数据（TitleNum）有两个属性title,num (box/)
- 查看图片和PDF (SeeFile) 有一个属性url (box/)
- 文件上传：UploadFile (box/)
- 时间相关：TwoTime Onetime (time/)
- 页码相关：PageNum (pagenum/)
- 读取摄像头: LocalCam (video/)
### 新增使用swoole进行本地测试，支持windows,linux。只须要在swoole官方下载swoole-cli运行就可以了
```sh
windows: swoole-cli.exe http.php
linux: swoole-cli http
#然后打开浏览器输入：http://127.0.0.1:9501
#这样就可以访问到打包dist目录的文件内容
```
