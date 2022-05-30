/*
 * @Author: 程英明
 * @Date: 2022-01-18 09:44:12
 * @LastEditTime: 2022-05-31 06:49:11
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\tailwind.config.js
 * QQ:504875043@qq.com
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,var(--el-color-white))"
        }
      });
    }
  ],
}
