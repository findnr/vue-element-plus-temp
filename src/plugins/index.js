/*
 * @Author: 程英明
 * @Date: 2022-01-14 13:37:47
 * @LastEditTime: 2023-09-19 16:59:32
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\index.js
 * QQ:504875043@qq.com
 */
import { setupTailwindcss } from "./tailwindcss"
import { setupElementPlus } from "./elementplus";
import { registComponents } from "./component";
import { setupQuill } from "./quill";
import { setupVxetable } from "./vxetable";

export default function setupPlugins(app) {
    setupTailwindcss()
    setupElementPlus(app)
    registComponents(app)
    setupQuill(app)
    setupVxetable(app)
}