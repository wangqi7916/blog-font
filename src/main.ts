/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljs from 'highlight.js' //导入代码高亮文件
import ElementPlus from 'element-plus'
// eslint-disable-next-line import/extensions
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style/index.less'

const app = createApp(App);
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block)
  })
});
app.use(router).use(ElementPlus).mount('#app')
