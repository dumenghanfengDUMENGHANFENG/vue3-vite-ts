/**
 * @description: 全局进度条
 * @param {string} val key
 * @param NProgressStart 打开进度条
 * @param  NProgressClose 关闭进度条
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";
/*
全局进度条
easing 动画方式
speed 递增进度条的速度
showSpinner 是否显示加载ico
trickleSpeed 自动递增间隔
minimum 更改启动时使用的最小百分比
parent 指定进度条的父容器
*/
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
  parent: "body"
});
// 打开进度条
export const NProgressStart = () => {
  NProgress.start();
};

// 关闭进度条
export const NProgressClose = () => {
  NProgress.done();
};
