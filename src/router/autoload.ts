import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/layout.vue";
// 子路由
// const views: any = import.meta.glob("../views/**/*.vue", { eager: true });
const views: any = import.meta.glob("../views/**/*.vue");
const workbench = [
  {
    name: "workbench",
    path: "/workbench",
    meta: {
      remark: "",
      icon: "IEpAim",
      title: "workbench",
      noCache: true,
      hidden: false,
      link: 0,
      powers: []
    },
    component: "workbench/workbench",
    children: []
  }
];
// 生成动态路由
const getRoutes = (data: any): RouteRecordRaw => {
  return {
    ...data,
    path: data.children ? `${data.path}` : "/workbench",
    component: Layout,
    children: data.children
      ? routerHandle([...workbench, ...data.children])
      : routerHandle([...workbench])
  };
};
const routerHandle = (data: any) => {
  if (!data || !data.length) return;
  return data.map((item: any) => {
    const { path, children, component, ...obj } = item;
    return {
      ...obj,
      path: `${path}`,
      component: views[`../views/${component}.vue`],
      children: routerHandle(children) || []
    };
  });
};
export default getRoutes;
