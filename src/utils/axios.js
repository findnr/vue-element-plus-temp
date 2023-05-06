/*
 * @Author: 程英明
 * @Date: 2021-12-01 14:56:33
 * @LastEditTime: 2023-05-06 14:24:15
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\utils\axios.js
 * QQ:504875043@qq.com
 */
import axios from "axios"
import { getToken } from "./token"
import store from '../store'
import router from '../router'
import { ElMessage, ElLoading } from 'element-plus'
import { Local } from 'findnrjs'

const http = axios.create({
    //设置请求时间过期
    timeout: 10000
});

//加载动画
let loading = null
//控制提示框
http.msgShow = true;
http.interceptors.request.use(
    config => {
        let token = null;
        const pathName = config.url.split('/')[4];
        switch (pathName) {
            case 'admin':
                token = getToken('adminToken');
                break;
            case 'unit':
                token = getToken('unitToken');
                break;
            case 'person':
                token = getToken('personToken');
                break;
            case 'user':
                token = getToken('userToken');
                break;
            case 'man':
                token = getToken('manToken');
                break;
        }
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
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        //关闭动画
        loading.close()
        const { data } = response
        if (http.msgShow) {
            data.code == 200 ? ElMessage.success({ message: data.msg }) : ElMessage.error({ message: data.msg })
        }
        if (response.status === 200) {
            router_break(response.data);
            return response.data;
        } else {
            Promise.reject(response);
        }
    },
    error => {
        //关闭动画
        loading.close()
        return Promise.reject(error);
    }
);
function router_break(obj) {
    if (obj?.code != 500) return;
    console.log(obj);
    switch (obj.path) {
        case 'admin':
            Local.del('adminToken');
            router.push({ path: '/auth/admin' });
            break;
        case 'unit':
            Local.del('unitToken');
            router.push({ path: '/auth/unit' });
            break;
        case 'person':
            Local.del('personToken');
            router.push({ path: '/auth/person' });
            break;
        case 'user':
            Local.del('userToken');
            router.push({ path: '/auth/user' });
            break;
        case 'man':
            Local.del('manToken');
            router.push({ path: '/auth/man' });
            break;
    }
}
export default http;