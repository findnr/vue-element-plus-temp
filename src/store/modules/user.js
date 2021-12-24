/*
 * @Author: 程英明
 * @Date: 2021-12-01 15:16:55
 * @LastEditTime: 2021-12-24 11:31:06
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
        //和计算性差不多
        title: (state) => {
            return state.title
        }
    },
    mutations: {
        test: (state, data) => {
            state.title = data
        }
    },
    actions: {
        //可以异步执行mutations内容
        clickTest: (context) => {
            context.commit('test', 'this is actios test');
        }
    },
}
export default user