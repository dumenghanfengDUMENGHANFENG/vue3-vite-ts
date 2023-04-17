import type { App } from "vue";
import type { Component } from "vue";
import {
  Female,
  Aim,
  House,
  Setting,
  Microphone,
  ArrowDown,
  Expand,
  Fold,
  Rank,
  FullScreen,
  Delete
} from "@element-plus/icons-vue";
const iconsComponents: {
  [propName: string]: Component;
} = {
  Female,
  Aim,
  House,
  Setting,
  Microphone,
  ArrowDown,
  Expand,
  Fold,
  Rank,
  FullScreen,
  Delete
};
// import "./assets/icons/iconfont.css"; //引入外部图标库
export const elePlusOperation = (app: App<Element>) => {
  // 全局导入动态加载的icon图标,其与使用自动导入
  for (const [key, component] of Object.entries(iconsComponents)) {
    app.component("IEp" + key, component);
  }
};
