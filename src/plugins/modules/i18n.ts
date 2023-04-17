import type { App } from "vue";
import { createI18n } from "vue-i18n"; //引入vue-i18n组件
// 引入所有国际化文件
const localPathPrefix = "../../locales/";
const modules = import.meta.glob("../../locales/*.y(a)?ml", { eager: true }); //匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：
const messages = Object.fromEntries(
  Object.entries(modules).map(([keys, value]: any) => {
    const yaml = keys.endsWith(".yaml");
    return [keys.slice(localPathPrefix.length, yaml ? -5 : -4), value.default];
  })
);
const language = (navigator.language || "en").toLocaleLowerCase(); // 这是获取浏览器的语言
// 实例化I18n
export const i18n = createI18n<false>({
  locale: sessionStorage.getItem("lang") || language.split("-")[0] || "zh", // 初始化配置语言
  fallbackLocale: "zh", // 设置备用语言
  messages,
  globalInjection: true, //  全局注册$t方法
  legacy: false // 支持compositionAPI
});
export const i18nt = i18n.global.t;
export function setupI18n(app: App) {
  app.use(i18n);
}
