<!--
 * @Author: findnr
 * @Date: 2024-05-25 08:57:55
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-25 10:35:35
 * @Description: 
-->
<template>
  <div class='index'>
    <video id="videoElement" autoplay></video>
  </div>
</template>

<script setup>
 onMounted(async()=>{
    const video = document.getElementById('videoElement');
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    console.log(videoDevices)
    if (videoDevices.length > 0) {
        // 假设虚拟摄像头是第一个视频设备
        const virtualCamera = videoDevices[0];
        // 请求访问虚拟摄像头
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                deviceId: virtualCamera.deviceId , 
                width: { ideal: 1920 },
                height: { ideal: 1080 },
            }
        });
        // 将视频流绑定到video元素上
        video.srcObject = stream;
    } else {
        console.error('没有找到视频输入设备。');
    }
    
    
})
</script>

<style scoped lang="scss">

.index{
    #videoElement {
            width: 100%;
            height: 100%;
            border: 1px solid black;
        }
}

</style>
