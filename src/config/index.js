/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:47
 * @LastEditTime: 2024-04-07 15:31:09
 * @LastEditors: findnr
 * @Description:
 * @FilePath: \vue-element-plus-temp\src\config\index.js
 * QQ:504875043@qq.com
 */

const config = {}
//配制请求URL
config.req_url = process.env.NODE_ENV == 'development' ? 'https://demoapi.findbox.com/' : 'https://demoapi.findbox.com/';
//配制静态文件地址
config.file_url = process.env.NODE_ENV == 'development' ? 'https://demoapi.findbox.com/storage/' : 'https://demoapi.findbox.com/storage/';
//配制上传文件时带的头信息
config.upload_file_header = { "Content-Type": "multipart/form-data" };
export default config;