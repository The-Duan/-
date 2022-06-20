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
// 导入路由鉴权
import './permission.js'
// 导入i18n
import i18n from '@/i18n'
// 导入全局属性
import installFilter from '@/filters/index'
// 指令
import installDirective from '@/directives'

createApp(App)
  .use(installDirective)
  .use(installFilter)
  .use(store)
  .use(installIcons)
  .use(installElementPlus)
  .use(router)
  .use(i18n)
  .mount('#app')
