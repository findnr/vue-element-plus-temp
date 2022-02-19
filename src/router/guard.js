/*
 * @Author: 程英明
 * @Date: 2022-01-18 11:39:30
 * @LastEditTime: 2022-01-19 09:58:45
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\guard.js
 * QQ:504875043@qq.com
 */
import { getToken } from "../utils/token"

function isAuth(to) {
    if (to.meta.auth) {
        return true;
    } else {
        return false;
    }
}

export function setupGuard(router) {
    router.beforeEach((to, from) => {
        const is_auth = isAuth(to);
        if (is_auth) {
            const is_token = getToken();
            if (!is_token) {
                return { path: '/auth/login' }
            }
        }
    })

}