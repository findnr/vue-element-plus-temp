/*
 * @Author: 程英明
 * @Date: 2021-11-25 09:52:58
 * @LastEditTime: 2022-05-31 06:37:49
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
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup"
import { uglify } from 'rollup-plugin-uglify'
import viteCompression from 'vite-plugin-compression';
import md5 from "js-md5"

const AutoImports = () => {
  return AutoImport({
    imports: ['vue', 'vue-router', 'vuex']
  })
}
// 生产模式
const builds = (url, dir) => {
  return defineConfig({
    base: url,
    plugins: [vue(), svgLoader('/src/assets/svg/'), AutoImports(), viteCompression()],
    server: {
      port: 3000,
      open: true,
      host: '0.0.0.0'
    },
    build: {
      outDir: dir,
      rollupOptions: {
        output: {
          plugins: [
            terser(),
            cleanup(),
            uglify(),
          ],
          entryFileNames: `assets/[name].${timestamp}.js`,
          chunkFileNames: `assets/[name].${timestamp}.js`,
          assetFileNames: `assets/[name].${timestamp}.[ext]`,
          manualChunks(id) {
            // if (id.includes('icons-vue')) {
            //   return 'icons-vue';
            // } else if (id.includes('element-plus')) {
            //   return 'element-plus';
            // } else {
            //   return 'ttt';
            // }
            if (id.includes('node_modules')) {
              // return id.toString().split('node_modules/')[1].split('/')[1].toString().split('.')[2];
              return md5(id.toString().split('node_modules/')[1].split('/')[1].toString().split('.')[2]);
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