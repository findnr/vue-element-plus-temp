/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:55
 * @LastEditTime: 2022-02-25 13:28:29
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\store\index.js
 * QQ:504875043@qq.com
 */
import { createStore } from 'vuex'


import global from './modules/global'
import user from './modules/user'
import list from './modules/list'



const store = new createStore({
    ...global,
    actions: {},
    modules: {
        user,
        list
    }
})

export default store