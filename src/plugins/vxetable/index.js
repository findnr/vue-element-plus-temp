/*
 * @Author: 程英明
 * @Date: 2023-11-24 15:15:07
 * @LastEditTime: 2023-11-24 15:19:01
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \cost_zwxx\src\plugins\vxetable\index.js
 * QQ:504875043@qq.com
 */
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

export function setupVxetable(app) {
    function useTable(app) {
        app.use(VXETable)
    }
    app.use(useTable)
}