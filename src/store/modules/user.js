/*
 * @Author: 程英明
 * @Date: 2021-12-01 15:16:55
 * @LastEditTime: 2021-12-24 11:01:38
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\store\modules\user.js
 * QQ:504875043@qq.com
 */
const user = {
    namespaced: true,
    state: ({
        title: 'name is user'
    }),
    getters: {

    },
    mutations: {
        test: (state, data) => {
            state.title = data
        }
    },
    actions: {

    },
}
export default user