// import { createApp } from 'vue'  按需导入故不需要单独引入
import App from './App.vue'
const app = createApp(App)
// router
import router from './router'
import './router/interceptRouter'
// 国际化
import i18n from './locales/index' // 引入
// 全局导入pinia
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)

// 全局注册element自定义引入(按需引入,如报没有需手动引入)
import elePlusOperation from '@/modules/elePlusOperation'
elePlusOperation(app)

// import ElementPlus from 'element-plus'
// app.use(ElementPlus)

// 清除默认样式
import '@/style/reset.scss'
// 导入总样式
import '@/style/index.scss'
import 'element-plus/dist/index.css' //按需引入饿了么css总感觉有问题
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
