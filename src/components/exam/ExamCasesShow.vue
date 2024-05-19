<!--
 * @Author: findnr
 * @Date: 2024-05-18 22:05:37
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-18 22:05:45
 * @Description: 
-->
<template>
  <div class="content" v-for="(v,k) in content" :key="k">
        <div class="box" v-if="v.qt_id == 5">
            <h5>{{k+1}}、{{v.title.q_title}}</h5>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">

.index{}

</style>
