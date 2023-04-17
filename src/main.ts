import { createApp } from "vue";
import AppConfigProvider from "./AppConfigProvider.vue";
import router from "@/router/index";
const app = createApp(AppConfigProvider);
// 全局引入插件处理
import plugins from "@/plugins/index";
plugins(app);
// 全局导入自定义指令
import directive from "@/directive/index";
directive(app);
// 导入pinia
import { setupStore } from "./store";
setupStore(app);
app.use(router);

// 为应用内抛出的未捕获错误
// app.config.errorHandler = (err, instance, info) => {
//   console.log(err, instance, info);
// };

// // 运行时警告
// app.config.warnHandler = (msg, instance, trace) => {
//   console.log(msg, instance, trace);
// };

app.mount("#app");
