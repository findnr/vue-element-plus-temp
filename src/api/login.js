/*
 * @Author: 程英明
 * @Date: 2022-02-21 10:21:12
 * @LastEditTime: 2024-07-30 14:02:02
 * @LastEditors: findnr
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\login.js
 * QQ:504875043@qq.com
 */
import http from "../utils/axios"
import config from "../config/index";
import qs from "qs";

let url = config.req_url + config.app_name+'/';

export function admin(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
export function home(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
