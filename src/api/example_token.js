/*
 * @Author: 程英明
 * @Date: 2021-11-25 11:00:23
 * @LastEditTime: 2021-11-25 16:07:00
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\api\example_token.js
 * QQ:504875043@qq.com
 */
import axios from "axios";
import config from "../config/index";
import qs from "qs";
//配制的URL
let url = config.url;
let header = config.header.file;

//token请求头封装 （请求拦截器）
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = token;
    }
    return config
}, error => {
    return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {

})
