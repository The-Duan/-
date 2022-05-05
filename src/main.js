import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element组件库
import installElementPlus from './plugins/element.js'
// 初始化样式表
import '@/styles/index.scss'
// 导入svgIcon
import installIcons from '@/icons/icons-index'

createApp(App).use(store).use(installIcons).use(installElementPlus).use(router).mount('#app')
