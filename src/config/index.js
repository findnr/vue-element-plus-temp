/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:47
 * @LastEditTime: 2022-10-12 15:34:04
 * @LastEditors: 程英明
 * @Description:
 * @FilePath: \vue-element-plus-temp\src\config\index.js
 * QQ:504875043@qq.com
 */

const config = {}
//配制请求URL
config.req_url = process.env.NODE_ENV == 'development' ? 'http://1api.gzwea.com/' : 'https://thinkphpapi.cym504875043.repl.co/';
//配制静态文件地址
config.file_url = process.env.NODE_ENV == 'development' ? 'http://1api.gzwea.com/storage/' : 'https://thinkphpapi.cym504875043.repl.co/storage/';
//配制上传文件时带的头信息
config.upload_file_header = { "Content-Type": "multipart/form-data" };
export default config;