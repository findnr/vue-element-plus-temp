/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:47
 * @LastEditTime: 2022-03-09 10:55:51
 * @LastEditors: 程英明
 * @Description:
 * @FilePath: \vue-element-plus-temp\src\config\index.js
 * QQ:504875043@qq.com
 */

const config = {}
//配制请求URL
config.req_url = process.env.NODE_ENV == 'development' ? 'http://1api.gzwea.com/' : 'http://api.gzwea.com/';
//配制上传文件时带的头信息
config.upload_file_header = { "Content-Type": "multipart/form-data" };
export default config;