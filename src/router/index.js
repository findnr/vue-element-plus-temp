/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:02:05
 * @LastEditTime: 2021-12-01 16:32:15
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\index.js
 * QQ:504875043@qq.com
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import index from "./modules/"
import test from "./modules/test"

const routes = [
    ...index, ...test
]

const router = createRouter({
    history: process.env.NODE_ENV == 'development' ? createWebHistory() : createWebHashHistory(),
    routes: routes
})
export default router;