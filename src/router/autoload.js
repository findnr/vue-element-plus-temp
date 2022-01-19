/*
 * @Author: 程英明
 * @Date: 2021-12-28 10:51:02
 * @LastEditTime: 2022-01-19 09:41:12
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\autoload.js
 * QQ:504875043@qq.com
 */

const views = import.meta.globEager('../views/**/*.vue');
console.log(views)
const routes = [];
function getRouter() {
    Object.entries(views).forEach(([file, module]) => {
        let route = {}
        const file_arr = file.split('/');
        if (file_arr.length === 3) {
            const path = file_arr[2].split('.')[0];
            route.path = `/${path}`;
            route.name = path;
            route.children = []
            route.component = module.default;
            if (module.default.route != undefined) {
                Object.assign(route, module.default.route)
            }
            routes.push(route)
        } else if (file_arr.length > 3) {
            file = file.replace('../views/', '')
            file = file.split('/')
            const len = file.length;
            let children_name = [];
            let tmp_routes = routes;
            file.forEach((v, i) => {
                route = {}
                if (i == len - 1) {
                    let end_path = v.split('.')[0]
                    children_name.push(end_path)
                    route.name = children_name.join('-')
                    route.path = end_path
                    route.component = module.default;
                    if (module.default.route != undefined) {
                        Object.assign(route, module.default.route)
                    }
                    tmp_routes.push(route);
                    children_name = []
                    tmp_routes = routes
                } else {
                    children_name.push(v)
                    if (i == 0) {
                        let is_num = tmp_routes.findIndex((vs, is) => vs.path == `/${v}`)
                        if (is_num == -1) {
                            route.path = `/${v}`
                            route.name = children_name.join('-')
                            route.children = []
                            const aaa = '../views/' + children_name.join('/') + '/index.vue'
                            route.component = () => import(aaa);
                            tmp_routes.push(route);
                            is_num = tmp_routes.length - 1
                        }
                        tmp_routes = tmp_routes[is_num].children;
                    } else {
                        let is_num = tmp_routes.findIndex((vs, is) => vs.path == `${v}`)
                        if (is_num == -1) {
                            route.path = `${v}`
                            route.name = children_name.join('-')
                            route.children = []
                            const aaa = '../views/' + children_name.join('/') + '/index.vue'
                            route.component = () => import(aaa);
                            tmp_routes.push(route);
                            is_num = tmp_routes.length - 1
                        }
                        tmp_routes = tmp_routes[is_num].children;
                    }

                }

            })
        }
    })
    return routes;
}

export default getRouter();