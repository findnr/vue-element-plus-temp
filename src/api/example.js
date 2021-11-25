/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:00:23
 * @LastEditTime: 2021-11-25 11:42:00
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\example.js
 * QQ:504875043@qq.com
 */
import axios from "axios";
import config from "../config/index";
import qs from "qs";

let url = config.url;

export function test(data = {}) {
    return axios.post(url + 'api/test', qs.stringify(data));
}

