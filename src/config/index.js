/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:47
 * @LastEditTime: 2024-04-08 14:21:24
 * @LastEditors: findnr
 * @Description:
 * @FilePath: \vue-element-plus-temp\src\config\index.js
 * QQ:504875043@qq.com
 */

const config = {}
//配制请求URL
config.req_url = process.env.NODE_ENV == 'development' ? 'https://demoapi.findbox.icu/' : 'https://demoapi.findbox.icu/';
//配制静态文件地址
config.file_url = process.env.NODE_ENV == 'development' ? 'https://demoapi.findbox.icu/storage/' : 'https://demoapi.findbox.icu/storage/';
//配制上传文件时带的头信息
config.upload_file_header = { "Content-Type": "multipart/form-data" };
export default config;