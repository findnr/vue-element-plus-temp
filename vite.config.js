/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:52:58
 * @LastEditTime: 2021-11-26 10:43:32
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\vite.config.js
 * QQ:504875043@qq.com
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const timestamp = new Date().getTime();
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'development' ? './' : '/',
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${timestamp}.js`,
        chunkFileNames: `assets/[name].${timestamp}.js`,
        assetFileNames: `assets/[name].${timestamp}.[ext]`
      }
    }
  }
})
