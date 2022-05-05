/*
 * @Author: 程英明
 * @Date: 2022-02-21 10:21:12
 * @LastEditTime: 2022-05-05 16:23:27
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\code.js
 * QQ:504875043@qq.com
 */
import http from "../utils/axios"
import config from "../config/index";
import qs from "qs";

let url = config.req_url;

export function get(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url + action, qs.stringify(data))
}
