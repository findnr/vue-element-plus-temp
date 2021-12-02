/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:00:23
 * @LastEditTime: 2021-12-02 15:09:13
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\example.js
 * QQ:504875043@qq.com
 */

import http from "../utils/request"
import config from "../config/index";
import qs from "qs";

let url = config.req_url;
let file = config.upload_file_header

export function test(data = {}) {
    return http.post(url + 'api/test', qs.stringify(data));
}
//上传单文件
export function img(data) {
    let param = new FormData();
    param.append("file", data[0]);
    return http.post(url + 'upload/one', param, file);
}
//上传多文件
export function file(data) {
    let param = new FormData();
    for (const key in data.file) {
        param.append("file[]", data.file[key]['raw']);
    }
    for (const key in data) {
        if (key != 'file') {
            param.append(key, data[key])
        }
    }
    return http.post(url + 'upload/more', param, file);
}
