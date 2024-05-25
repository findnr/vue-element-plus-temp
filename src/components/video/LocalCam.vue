<!--
 * @Author: findnr
 * @Date: 2024-05-25 08:57:55
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-25 09:02:52
 * @Description: 
-->
<template>
  <div class='index'>
    <video id="videoElement" autoplay></video>
  </div>
</template>

<script setup>
onMounted(()=>{
    const video = document.getElementById('videoElement');
    console.log(navigator.mediaDevices)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // 将视频流绑定到video元素上
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.error('访问摄像头失败: ', error);
        });
    } else {
        alert('你的浏览器不支持访问媒体设备。');
    }
})
</script>

<style scoped lang="scss">

.index{
    #videoElement {
            width: 600px;
            height: 400px;
            border: 1px solid black;
        }
}

</style>
