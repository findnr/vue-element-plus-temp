/*
 * @Author: 程英明
 * @Date: 2022-11-14 16:06:27
 * @LastEditTime: 2023-02-10 16:21:51
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\admin.js
 * QQ:504875043@qq.com
 */
import http from "../utils/axios"
import config from "../config/index";
import qs from "qs";

let url = config.req_url + 'tmpapi/admin/';

export function system(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
export function common(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
export function mangeruser(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
export function password(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data));
}

export function info(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data));
}