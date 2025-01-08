import http from "../utils/axios"
import config from "../config/index";
import qs from "qs";

let url =  "https://tttttttt.tttt.com/"

export function unit(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url+'/'+ action, qs.stringify(data))
}
export function person(action = '', data = {}, msgShow = true) {
    http.msgShow = msgShow
    return http.post(url+'/'+ action, qs.stringify(data))
}