import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import zh from './zh' // 中文语言包
import en from './en' // 英文语言包

const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
// 实例化I18n
const i18n = createI18n({
  locale: sessionStorage.getItem('lang') || language.split('-')[0] || 'zh', // 初始化配置语言
  fallbackLocale: 'zh', // 设置备用语言
  messages: {
    en,
    zh
  }
})
export default i18n
