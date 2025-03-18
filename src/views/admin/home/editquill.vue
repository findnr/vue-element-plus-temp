<template>
    <div>
      <h2>Quill编辑器示例</h2>
      <CymQuillEditor v-model="content" :options="editorOptions" @change="onChange" />
      <div class="preview" v-html="content"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const content = ref('<p>Hello Quill!</p>');
  const editorOptions = ref({
    placeholder: '开始编辑...',
    // 可以覆盖默认配置
  });
  
  const onChange = (html) => {
    console.log('内容已更新:', html);
  };
  </script>