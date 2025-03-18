<template>
    <div class="quill-editor">
      <div ref="editorContainer"></div>
    </div>
  </template>
  
  <script setup>
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  import { ElMessage, ElLoading } from 'element-plus';
  import { ref, watch, onMounted } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    }
  });
  
  const emit = defineEmits(['update:modelValue', 'change']);
  const editorContainer = ref(null);
  const quill = ref(null);
  
  // 默认配置
  const defaultOptions = {
    theme: 'snow',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image', 'video']
      ]
    },
    placeholder: '请输入内容...',
    readOnly: false
  };
  
  onMounted(() => {
    initQuill();
  });
  
  // 自定义图片处理函数
  const handleImageUpload = () => {
    const toolbar = quill.value.getModule('toolbar');
    const toolbarEl = toolbar.container;
    const imageButton = toolbarEl.querySelector('button.ql-image');

    // 创建下拉菜单
    const dropdown = document.createElement('div');
    dropdown.className = 'image-upload-dropdown';
    dropdown.style.cssText = 'position: absolute; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1000;';

    // 添加URL选项
    const urlButton = document.createElement('div');
    urlButton.textContent = '输入URL';
    urlButton.style.cssText = 'padding: 6px 12px; cursor: pointer; white-space: nowrap;';
    urlButton.onmouseover = () => urlButton.style.backgroundColor = '#f0f0f0';
    urlButton.onmouseout = () => urlButton.style.backgroundColor = 'transparent';
    urlButton.onclick = async () => {
      dropdown.remove();
      const { ElMessageBox } = await import('element-plus');
      try {
        const urlResult = await ElMessageBox.prompt(
          '请输入图片URL',
          '添加图片URL',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /^(https?:\/\/|\/).*\.(jpg|jpeg|png|gif|webp)$/i,
            inputErrorMessage: '请输入有效的图片URL'
          }
        );
        
        const imageUrl = urlResult.value.trim();
        if (imageUrl) {
          insertImage(imageUrl);
          ElMessage.success('图片添加成功');
        }
      } catch (error) {
        if (error !== 'cancel' && error !== 'close') {
          console.error('添加图片取消:', error);
        }
      }
    };

    // 添加上传选项
    const uploadButton = document.createElement('div');
    uploadButton.textContent = '本地上传';
    uploadButton.style.cssText = 'padding: 6px 12px; cursor: pointer; white-space: nowrap;';
    uploadButton.onmouseover = () => uploadButton.style.backgroundColor = '#f0f0f0';
    uploadButton.onmouseout = () => uploadButton.style.backgroundColor = 'transparent';
    uploadButton.onclick = () => {
      dropdown.remove();
      uploadImageFile();
    };

    // 组装下拉菜单
    dropdown.appendChild(urlButton);
    dropdown.appendChild(uploadButton);

    // 定位下拉菜单
    const rect = imageButton.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.style.left = `${rect.left + window.scrollX}px`;

    // 添加到文档中
    document.body.appendChild(dropdown);

    // 点击其他区域关闭下拉菜单
    const closeDropdown = (e) => {
      if (!dropdown.contains(e.target) && e.target !== imageButton) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    };
    document.addEventListener('click', closeDropdown);
  };
  
  // 插入图片到编辑器
  const insertImage = (imageUrl) => {
    const range = quill.value.getSelection(true);
    quill.value.insertEmbed(range.index, 'image', imageUrl);
    quill.value.setSelection(range.index + 1);
  };
  
  // 上传图片文件
  const uploadImageFile = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
          // 显示上传进度提示
          const loadingInstance = ElLoading.service({
            lock: true,
            text: '图片上传中...',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          
          // 创建FormData对象
          const formData = new FormData();
          formData.append('image', file);
          
          // 使用项目中的API进行上传
          // 这里使用项目中的get函数，实际项目中可能需要调整为适合的上传API
          // 如果项目中有专门的上传接口，应该使用那个接口
          import('axios').then(async ({ default: axios }) => {
            try {
              // 这里使用axios直接上传，因为项目中的get函数可能不适合文件上传
              // 实际使用时应替换为项目中的上传API
              const response = await axios.post('/api/common/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              
              loadingInstance.close();
              
              // 如果上传成功，使用返回的URL
              if (response.data && response.data.code === 200) {
                const imageUrl = response.data.url;
                insertImage(imageUrl);
                ElMessage.success('图片上传成功');
              } else {
                // 如果上传API不可用，临时使用本地URL（仅用于开发测试）
                const imageUrl = URL.createObjectURL(file);
                insertImage(imageUrl);
                ElMessage.warning('使用临时URL，实际环境请配置正确的上传API');
              }
            } catch (error) {
              loadingInstance.close();
              ElMessage.error('图片上传失败');
              console.error('上传失败:', error);
              
              // 上传失败时，可以选择是否使用本地URL（仅用于开发测试）
              const useLocalUrl = await ElMessageBox.confirm(
                '上传到服务器失败，是否使用临时URL？（仅用于测试）',
                '上传失败',
                {
                  confirmButtonText: '使用临时URL',
                  cancelButtonText: '取消',
                  type: 'warning'
                }
              ).catch(() => false);
              
              if (useLocalUrl) {
                const imageUrl = URL.createObjectURL(file);
                insertImage(imageUrl);
              }
            }
          });
        } catch (error) {
          ElMessage.error('图片上传失败');
          console.error('上传失败:', error);
        }
      }
    };
  };

  const initQuill = () => {
    // 合并配置
    const options = { ...defaultOptions, ...props.options };
    
    // 初始化Quill
    quill.value = new Quill(editorContainer.value, options);

    // 添加图片处理事件
    const toolbar = quill.value.getModule('toolbar');
    toolbar.addHandler('image', handleImageUpload);
    
    // 设置初始内容
    if (props.modelValue) {
      quill.value.root.innerHTML = props.modelValue;
    }
    
    // 监听内容变化
    quill.value.on('text-change', () => {
      const html = quill.value.root.innerHTML;
      emit('update:modelValue', html);
      emit('change', html);
    });
  };
  
  // 监听modelValue变化
  watch(
    () => props.modelValue,
    (newValue) => {
      if (quill.value && newValue !== quill.value.root.innerHTML) {
        quill.value.root.innerHTML = newValue || '';
      }
    }
  );
  
  // 暴露Quill实例，方便外部访问
  defineExpose({
    quill
  });
  </script>
  
  <style>
  .quill-editor {
    width: 100%;
    height: 100%;
  }
  </style>