// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'blog', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  }
  // server: {
  //   port: 3000,
  //   open: true, // 自动打开
  //   base: './ ', // 生产环境路径
  //   proxy: {
  //     // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
  //     // 正则表达式写法
  //     '^/api': {
  //       target: 'http://127.0.0.1:7001', // 后端服务实际地址
  //       changeOrigin: true, // 开启代理
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
