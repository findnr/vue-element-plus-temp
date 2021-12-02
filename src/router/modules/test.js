/*
 * @Author: 程英明
 * @Date: 2021-12-01 16:32:35
 * @LastEditTime: 2021-12-01 16:57:59
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\modules\test.js
 * QQ:504875043@qq.com
 */
const test = [
    {
        path: "/test",
        name: "test",
        redirect: '/test/init',
        component: () => import("../../views/test/Init.vue"),
        children: [
            {
                path: 'init',
                name: 'test-init',
                component: () => import("../../views/test/Init.vue"),
            }
        ]
    }

]
export default test;