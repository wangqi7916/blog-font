import { defineConfig } from "vite";
import { resolve } from "path"; // 主要用于alias文件路径别名
import vue from "@vitejs/plugin-vue";

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "/@": pathResolve("src"),
    },
  },
  // 打包配置
  build: {
    target: "modules",
    outDir: "blog", //指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器，terser构建后文件体积更小
  },
});
