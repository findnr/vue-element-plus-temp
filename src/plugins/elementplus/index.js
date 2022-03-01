/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:45:11
 * @LastEditTime: 2022-03-01 16:44:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\elementplus\index.js
 * QQ:504875043@qq.com
 */

import ElementPlus from 'element-plus'
import './middify.scss'

import * as Icons from "@element-plus/icons-vue"
import { ElMessage } from 'element-plus'

export function setupElementPlus(app) {
    app.use(ElementPlus)
    Object.keys(Icons).forEach((it) => {
        app.component(it, Icons[it]);
    });
    app.config.globalProperties.$message = ElMessage;
}
