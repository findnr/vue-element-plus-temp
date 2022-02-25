/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:45:11
 * @LastEditTime: 2022-02-25 14:10:18
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\elementplus\index.js
 * QQ:504875043@qq.com
 */

import ElementPlus from 'element-plus'
import './middify.scss'

import * as Icons from "@element-plus/icons-vue"

export function setupElementPlus(app) {
    app.use(ElementPlus)
    Object.keys(Icons).forEach((it) => {
        app.component(it, Icons[it]);
    });
}
