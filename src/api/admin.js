/*
 * @Author: 程英明
 * @Date: 2022-11-14 16:06:27
 * @LastEditTime: 2023-12-29 16:18:29
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\admin.js
 * QQ:504875043@qq.com
 */
import http from "../utils/axios"
import config from "../config/index";
import qs from "qs";

let url = config.req_url + 'test/admin/';
function common_fun(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    if (data.u == 1) {
        let param = new FormData();
        for (const key in data.file) {
            param.append("file[]", data.file[key]['raw']);
        }
        for (const key in data) {
            if (key != 'file') {
                param.append(key, data[key])
            }
        }
        return http.post(action, param);
    } else {
        return http.post(action, qs.stringify(data))
    }
}
export function system(action = '', data = {}, msgShow = true) {

    return common_fun(url + action, data, msgShow)
}
export function common(action = '', data = {}, msgShow = true) {
    return common_fun(url + action, data, msgShow)
}
export function mangeruser(action = '', data = {}, msgShow = true) {
    return common_fun(url + action, data, msgShow)
}
export function password(action = '', data = {}, msgShow = true) {
    return common_fun(url + action, data, msgShow)
}
export function info(action = '', data = {}, msgShow = true) {
    return common_fun(url + action, data, msgShow)
}
export function upload(action = '', data = {}, msgShow = true) {
    return common_fun(url + 'upload/' + action, data, msgShow)
}