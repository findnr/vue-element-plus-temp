import setupTailwindcss from "./tailwindcss"
import setupElementPlus from "./elementplus";
/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:37:47
 * @LastEditTime: 2022-02-23 10:44:33
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\index.js
 * QQ:504875043@qq.com
 */
export default function setupPlugins(app) {

    setupElementPlus(app)
    setupTailwindcss()
}