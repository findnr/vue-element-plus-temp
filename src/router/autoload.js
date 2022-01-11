/*
 * @Author: 程英明
 * @Date: 2021-12-28 10:51:02
 * @LastEditTime: 2022-01-11 15:11:58
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\router\autoload.js
 * QQ:504875043@qq.com
 */

const views = import.meta.globEager('../views/**/*.vue');
const routes = [];
function getRouter() {
    Object.entries(views).forEach(([file, module]) => {
        let route = {}
        const file_arr = file.split('/');
        if (file_arr.length === 3) {
            const path = file_arr[2].split('.')[0];
            route.path = `/${path}`;
            route.name = path;
            route.component = module.default;
            routes.push(route)
        } else {
            file = file.replace('../views/', '')
            file = file.split('/')
            const len = file.length;
            const children_name = [];
            let tmp_routes = routes;
            file.forEach((v, i) => {
                route = {}
                if (i == len - 1) {
                    let end_path = v.split('.')[0]
                    children_name.push(end_path)
                    route.name = children_name.join('-')
                    route.path = end_path
                    route.component = module.default;
                    console.log(module.default)
                    tmp_routes.push(route);
                    tmp_routes = routes
                } else {
                    children_name.push(v)
                    if (i == 0) {
                        let is_num = tmp_routes.findIndex((vs, is) => vs.path == `/${v}`)
                        if (is_num == -1) {
                            route.path = `/${v}`
                            route.name = children_name.join('-')
                            route.children = []
                            route.component = module.default;
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
                            route.component = module.default;
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