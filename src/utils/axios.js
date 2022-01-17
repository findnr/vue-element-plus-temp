/*
 * @Author: 程英明
 * @Date: 2021-12-01 14:56:33
 * @LastEditTime: 2021-12-16 15:53:47
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\utils\request.js
 * QQ:504875043@qq.com
 */
import axios from "axios"
import { getToken } from "./token"
import store from '../store'
import router from '../router'
import { ElMessage, ElLoading } from 'element-plus'

const http = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    //设置请求时间过期
    timeout: 10000
});

//加载动画
let loading = null

http.interceptors.request.use(
    config => {
        let token = getToken();
        if (token) config.headers.Authorization = token;// 判断是否存在token，如果存在的话，则每个http header都加上token
        //加载动画
        loading = ElLoading.service({
            lock: true,
            text: '加载中...',
        })
        return config;
    },
    error => {
        //关闭动画
        loading.close()

        return Promise.reject();
    }
);

http.interceptors.response.use(
    response => {

        //关闭动画
        loading.close()

        const { data } = response
        ElMessage.success({
            message: data.msg,
            type: 'success',
        })

        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        //关闭动画
        loading.close()

        return Promise.reject();
    }
);

export default http;