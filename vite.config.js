/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:52:58
 * @LastEditTime: 2022-04-25 09:16:07
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\vite.config.js
 * QQ:504875043@qq.com
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'

import { svgLoader } from './src/utils/svg-loader.js'

const timestamp = new Date().getTime();

const AutoImports = () => {
  return AutoImport({
    imports: ['vue', 'vue-router']
  })
}
// 生产模式
const builds = (url, dir) => {
  console.log(dir)
  return defineConfig({
    base: url,
    plugins: [vue(), svgLoader('/src/assets/svg/'), AutoImports()],
    server: {
      port: 3000,
      open: true,
      host: '0.0.0.0'
    },
    build: {
      outDir: dir,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].${timestamp}.js`,
          chunkFileNames: `assets/[name].${timestamp}.js`,
          assetFileNames: `assets/[name].${timestamp}.[ext]`,
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

export default ({ mode }) => {
  const url = loadEnv(mode, process.cwd()).VITE_BASEURL
  const dir = loadEnv(mode, process.cwd()).VITE_OUTDIR
  return builds(url, dir);
}