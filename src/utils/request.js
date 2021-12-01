/*
 * @Author: 程英明
 * @Date: 2021-12-01 14:56:33
 * @LastEditTime: 2021-12-01 15:11:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\utils\request.js
 * QQ:504875043@qq.com
 */
import axios from "axios"
import { getToken } from "./token"


const http = axios.create({
    //设置请求时间过期
    timeout: 5000
});

http.interceptors.request.use(
    config => {
        if (getToken()) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

http.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default http;