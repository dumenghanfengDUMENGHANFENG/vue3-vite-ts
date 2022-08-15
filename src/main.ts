import { createApp } from 'vue'
import App from './App.vue'
import piniaPluginPersist from 'pinia-plugin-persist'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import './router/interceptRouter'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

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
app.mount('#app')
