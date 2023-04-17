import { RouteRecordRaw } from "vue-router";
import Layout from "../layout/layout.vue";
export const routerBasicsList: RouteRecordRaw[] = [
  {
    path: "/",
    name: "/",
    component: Layout,
    redirect: "/workbench",
    meta: {
      title: "工作台",
      icon: "Menu"
    },
    children: [
      {
        path: "/workbench",
        name: "workbench",
        component: () => import("@/views/workbench/workbench.vue")
      },
      {
        path: "/redirect/:path",
        name: "redirect",
        component: () => import("@/views/redirect/redirect.vue")
      }
    ]
  },
  {
    path: "/Login",
    name: "Login",
    meta: {
      title: "Login",
      icon: "Menu"
    },
    component: () => import("@/views/login/login.vue")
  },
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error-page/error-page-404.vue"),
    meta: {
      title: "404"
    }
  }
];
