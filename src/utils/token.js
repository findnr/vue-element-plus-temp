/*
 * @Author: 程英明
 * @Date: 2021-12-01 15:02:58
 * @LastEditTime: 2021-12-01 15:06:12
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\utils\token.js
 * QQ:504875043@qq.com
 */
export function getToken(name = 'token') {
    return localStorage.getItem(name) || sessionStorage.getItem(name) || false;
}