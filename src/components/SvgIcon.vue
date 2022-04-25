<!--
 * @Author: 程英明
 * @Date: 2022-02-25 11:35:36
 * @LastEditTime: 2022-04-25 19:46:17
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\components\SvgIcon.vue
 * QQ:504875043@qq.com
-->
<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
});

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`;
  }
  return "svg-icon";
});
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
