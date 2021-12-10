/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// eslint-disable-next-line import/extensions
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style/index.less'

createApp(App).use(router).use(ElementPlus).mount('#app')
