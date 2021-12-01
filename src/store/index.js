/*
 * @Author: 程英明
 * @Date: 2021-11-25 10:16:55
 * @LastEditTime: 2021-12-01 15:46:32
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\store\index.js
 * QQ:504875043@qq.com
 */
import { createStore } from 'vuex'


import user from './modules/user'


const store = new createStore({
    modules: {
        user
    }
})

export default store