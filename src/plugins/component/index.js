/*
 * @Author: 程英明
 * @Date: 2022-02-24 08:51:02
 * @LastEditTime: 2022-02-25 10:48:58
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\plugins\component\index.js
 * QQ:504875043@qq.com
 */
export function registComponents(app) {
    const components = import.meta.globEager('../../components/**/*.vue')
    Object.keys(components).forEach((it) => {
        const component = components[it]
        if (!app.component(component.default.name || toHump(getComponentName(it)))) {
            app.component(component.default.name || toHump(getComponentName(it)), component.default)
        }

    })
}
function toHump(str) {
    if (!str) return str
    return str
        .replace(/\-(\w)/g, function (all, letter) {
            return letter.toUpperCase()
        })
        .replace(/(\s|^)[a-z]/g, function (char) {
            return char.toUpperCase()
        })
}
function getComponentName(key) {
    if (!key) {
        return ''
    }
    const paths = key.split('/')
    const name = paths
        .filter((it) => !!it && it !== '.')
        .reverse()
        .find((it) => it !== 'index.vue' && it !== 'index.ts' && it !== 'index.js').replace('.vue', '')
    return name || ''
}