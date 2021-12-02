/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:00:23
 * @LastEditTime: 2021-12-01 16:40:29
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\example.js
 * QQ:504875043@qq.com
 */

import http from "../utils/request"
import config from "../config/index";
import qs from "qs";

let url = config.req_url;

export function test(data = {}) {
    return http.post(url + 'api/test', qs.stringify(data));
}

