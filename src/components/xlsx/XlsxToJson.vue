<!--
 * @Author: 程英明
 * @Date: 2022-06-17 11:37:04
 * @LastEditTime: 2023-05-08 09:18:31
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\xlsx\XlsxToJson.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class='index bg-white'>
        <div class="file p-5">
            <el-upload :key="uploadNum" class="upload-demo" drag :auto-upload="false" multiple :limit="1"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                :on-remove="fileRemove" :on-change="fileAdd">
                <el-icon class="el-icon--upload">
                    <upload-filled />
                </el-icon>
                <div class="el-upload__text">
                    可拖拽文件<em>可点击选择</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        只能使用xlsx，xls文件
                    </div>
                </template>
            </el-upload>
            <!-- <el-button type="success" @click="see">查看数据</el-button> -->
            <el-button type="danger" v-if="fileList.length == 1" @click="upload">确认导入</el-button>
        </div>
    </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import * as xlsx from "xlsx"
const props = defineProps({
    header: Array
})
const { header } = props
const uploadNum = ref(0)
const emits = defineEmits(['getJson'])
const fileList = ref([])
// const see=()=>{
//     getData(fileList[0]);
// }
const upload = () => {
    if (fileList.value.length == 0) return;
    getData(fileList.value[0]).then(res => {
        uploadApi(res)
    })
}
const uploadApi = (obj) => {
    emits('getJson', obj)
}
const clear = () => {
    fileList.value.pop();
    uploadNum.value++
}
const getData = async (file) => {
    let dataBinary = await readFile(file.raw)
    let workBook = xlsx.read(dataBinary, { type: 'binary', cellDates: true })
    let workSheet = workBook.Sheets[workBook.SheetNames[0]]
    const data = xlsx.utils.sheet_to_json(workSheet, { header, range: 1 })
    let s = JSON.stringify(data)
    s = s.replace(/(\\t|\\r|\\n|\\s|\\b|\\f|\\u|' ')/gi, '')
    s = s.split(" ").join("");
    s = JSON.parse(s)
    return s;
}
const readFile = (file) => {
    return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = ev => {
            resolve(ev.target.result)
        }
    })
}
const fileAdd = (one) => {
    fileList.value.push(one)
}
const fileRemove = () => {
    fileList.value.pop();
}
defineExpose({ clear })
</script>

<style scoped lang="scss">
.index {}
</style>
