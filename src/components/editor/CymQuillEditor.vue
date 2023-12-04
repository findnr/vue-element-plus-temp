<template>
    <el-button @click="ttt">测试</el-button>
    <div class="index">
        <QuillEditor ref="editor" toolbar="full" theme="snow" />
    </div>
</template>

<script setup>
const editor = ref(null)
const ttt = () => {
    let c = editor.value.getHTML();
    console.log(c);
}

</script>

<style scoped lang="scss">
.index {
    background: #fff;
    padding: 10px;
    height: 500px;
}
</style>
