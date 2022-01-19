/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:02:05
 * @LastEditTime: 2022-01-18 14:12:44
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\index.js
 * QQ:504875043@qq.com
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import layouts from "./autoload"
import { setupGuard } from "./guard"

const routes = [
    {
        path: '/',
        redirect: '/index/home/index',
    },
    ...layouts
]
console.log(routes)
const router = createRouter({
    history: process.env.NODE_ENV == 'development' ? createWebHistory() : createWebHashHistory(),
    routes: routes
})

setupGuard(router)

export default router;