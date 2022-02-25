/*
 * @Author: 程英明
 * @Date: 2021-12-17 09:56:26
 * @LastEditTime: 2022-02-25 13:28:34
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\store\modules\global.js
 * QQ:504875043@qq.com
 */

//全局使用
import { getThemes } from '../../utils/storage'
const navbarType = getThemes()?.navbarType ?? '左侧菜单模式'
export default {
    state: {
        navbarType: navbarType,
        isCollapse: false,
        activeMenu: ''
    },
    mutations: {
        // 获取导航栏类型
        getNavbarType(state, data) {
            state.navbarType = data
        },

        // 获取菜单折叠
        getCollapse(state, data) {
            state.isCollapse = data
        },

        // 获取当前选中菜单
        getActiveMenu(state, data) {
            state.activeMenu = data
        }
    }
}