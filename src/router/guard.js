/*
 * @Author: 程英明
 * @Date: 2022-01-18 11:39:30
 * @LastEditTime: 2023-05-06 13:27:46
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
            const pathName = to.fullPath.split('/')[1];
            let is_token = null;
            switch (pathName) {
                case 'admin':
                    is_token = getToken('adminToken');
                    break;
                case 'unit':
                    is_token = getToken('unitToken');
                    break;
                case 'person':
                    is_token = getToken('personToken');
                case 'user':
                    is_token = getToken('userToken');
                case 'man':
                    is_token = getToken('manToken');
            }
            if (!is_token) {
                return { path: '/auth/' + pathName }
            }
        }
    })

}