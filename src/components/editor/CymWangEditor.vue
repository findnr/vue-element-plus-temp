<!--
 * @Author: 程英明
 * @Date: 2023-05-08 09:25:34
 * @LastEditTime: 2023-05-08 09:51:34
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\editor\CymWangEditor.vue
 * QQ:504875043@qq.com
-->
<template>
    <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
        <Editor style="height: 500px; overflow-y: hidden" v-model="valueHtml" :defaultConfig="editorConfig" mode="default"
            @onCreated="handleCreated" />
    </div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import cymconfig from "@/config";
// import { noticeUpload } from "@/api/admin"

const emits = defineEmits(['upload'])
const props = defineProps({
    content: String,
})
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref(props.content);

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容...", MENU_CONF: {} };
editorConfig.MENU_CONF["uploadImage"] = {
    // 自定义上传
    async customUpload(file, insertFn) {
        // file 即选中的文件
        let data = {}
        data.file = [{ raw: file }]
        data.method = 'upload'
        // noticeUpload(data).then(res => {
        //     if (res.code == 200) {
        //         insertFn(cymconfig.share_url + res.data.url);
        //     }
        // })
    },
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
});

const handleCreated = (editor) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
};
const getEditorContent = () => {
    return valueHtml.value;
}
defineExpose({ getEditorContent })
// watch(
//     ()=>valueHtml.value,
//     (n,o)=>{
//         console.log(n)
//     }
// )
</script>

<style scoped lang="scss">
.index {}
</style>