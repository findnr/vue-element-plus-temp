/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:45:11
 * @LastEditTime: 2024-05-18 17:36:02
 * @LastEditors: findnr
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\elementplus\index.js
 * QQ:504875043@qq.com
 */

import ElementPlus from 'element-plus'
import './middify.scss'

import * as Icons from "@element-plus/icons-vue"
import { ElMessage } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export function setupElementPlus(app) {
    app.use(ElementPlus, {
        locale: zhCn
    })
    Object.keys(Icons).forEach((it) => {
        app.component(it, Icons[it]);
    });
    // app.config.globalProperties.$message = ElMessage;
    //全局注册
    app.provide('$message', ElMessage)
    //页面中使用方式
    // inject('$message')
}

