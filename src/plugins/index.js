import setupElementPlus from "./elementplus";
import setupTailwindcss from "./tailwindcss"
/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:37:47
 * @LastEditTime: 2022-01-18 09:54:27
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\index.js
 * QQ:504875043@qq.com
 */
export default function setupPlugins(app) {

    setupElementPlus(app)

    setupTailwindcss()
}