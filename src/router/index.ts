import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import routerMap from './routerMap'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Workbench',
    redirect: '/workbench',
    meta: {
      title: 'Workbench',
      icon: 'Menu'
    },
    component: () => import('@/layout/index.vue'),
    children: routerMap
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      icon: 'Menu'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      icon: 'Menu'
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/redirect',
    name: 'redirect',
    meta: {
      title: 'redirect',
      icon: 'Menu'
    },
    component: () => import('@/views/redirect/index.vue')
  }
]
// const router = createRouter({
//   history,
//   routes,
// });
// const history = createWebHistory();
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
  // history: createWebHashHistory(import.meta.env.VITE_BASE_PATH as string), // 改为这种HASH路由模式
  routes
})
export default router
