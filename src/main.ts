import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
import './router/interceptRouter'
// 国际化
import i18n from './locales/index' // 引入
// pinia
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 清除默认样式
import '@/style/reset.scss'
import '@/style/index.scss'
// 全局导入store(封装后)
const store = createPinia()
store.use(piniaPluginPersist)
const app = createApp(App)
// 全局导入icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(i18n)
app.mount('#app')
