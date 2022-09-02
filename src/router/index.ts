import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'
type RouteRecordRawNew = RouteRecordRaw & {
  hidden?: boolean
  meta: {
    title: string
    icon: string
  }
  nestingIsShow?: boolean
  children?: {
    hidden?: boolean
    nestingIsShow?: boolean
  }
}
/*
 redirect 重定向
 hidden 是否隐藏
 nestingIsShow :是否嵌套
 */
const routes: Array<RouteRecordRawNew> = [
  {
    path: '/',
    name: '/',
    nestingIsShow: true,
    redirect: '/workbench',
    component: Layout,
    meta: {
      title: '工作台',
      icon: 'Menu'
    },
    children: [
      {
        path: '/workbench',
        name: 'workbench',
        nestingIsShow: true,
        meta: {
          title: '工作台',
          icon: 'Menu'
        },
        component: () => import('@/views/workbench/index.vue')
      },
      {
        path: '/redirect',
        name: 'redirect',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/workbenchCopyName',
    name: 'workbenchCopy',
    meta: {
      title: '测试',
      icon: 'PieChart'
    },
    nestingIsShow: true,
    redirect: '/workbenchCopy',
    component: Layout,
    children: [
      {
        path: '/workbenchCopy',
        name: 'workbenchCopy',
        nestingIsShow: true,
        meta: {
          title: '测试',
          icon: 'Menu'
        },
        component: () => import('@/views/workbenchCopy/index.vue')
      }
    ]
  },
  {
    path: '/vueApi',
    name: 'vueApi',
    meta: {
      title: 'VUE3学习',
      icon: 'Menu'
    },
    redirect: '/vueApi/component',
    component: Layout,
    children: [
      {
        path: '/vueApi/component',
        name: 'component',
        meta: {
          title: 'component',
          icon: 'Coin'
        },
        component: () => import('@/views/vueApi/component.vue')
      },
      {
        path: '/vueApi/ref',
        name: 'ref',
        meta: {
          title: 'ref',
          icon: 'Compass'
        },
        component: () => import('@/views/vueApi/ref.vue')
      },
      {
        path: '/vueApi/vueX',
        name: 'vueX',
        meta: {
          title: 'vueX',
          icon: 'Menu'
        },
        component: () => import('@/views/vueApi/vueX.vue')
      },
      {
        path: '/vueApi/watch',
        name: 'watch',
        meta: {
          title: 'watch',
          icon: 'Dessert'
        },
        component: () => import('@/views/vueApi/watch.vue')
      },
      {
        path: '/vueApi/axios',
        name: 'axios',
        meta: {
          title: 'axios',
          icon: 'Checked'
        },
        component: () => import('@/views/vueApi/axios.vue')
      }
    ]
  },
  {
    path: '/eleUi',
    name: 'eleUi',
    meta: {
      title: '封装组件',
      icon: 'Brush'
    },
    component: Layout,
    children: [
      {
        path: '/eleUi/table',
        name: 'table',
        meta: {
          title: 'table',
          icon: 'Printer'
        },
        component: () => import('@/views/eleUi/table/index.vue')
      },
      {
        path: '/eleUi/queryForm',
        name: 'queryForm',
        meta: {
          title: 'queryForm',
          icon: 'Checked'
        },
        component: () => import('@/views/eleUi/queryForm/index.vue')
      },
      {
        path: '/eleUi/dialog',
        name: 'Dialog',
        meta: {
          title: 'Dialog',
          icon: 'ScaleToOriginal'
        },
        component: () => import('@/views/eleUi/dialog/index.vue')
      },
      {
        path: '/eleUi/message',
        name: 'Message',
        meta: {
          title: 'message',
          icon: 'ScaleToOriginal'
        },
        component: () => import('@/views/eleUi/message/index.vue')
      }
    ]
  },
  {
    path: '/apiList',
    name: 'apiList',
    meta: {
      title: '实例',
      icon: 'Brush'
    },
    component: Layout,
    children: [
      {
        path: '/apiList/repairManage',
        name: 'repairManage',
        meta: {
          title: '报修',
          icon: 'Printer'
        },
        component: () => import('@/views/apiList/repairManage/index.vue')
      }
    ]
  },
  {
    path: '/echarts',
    name: 'echarts',
    meta: {
      title: 'echarts',
      icon: 'PieChart'
    },
    component: Layout,
    children: [
      {
        path: '/echarts/histogram',
        name: 'histogram',
        meta: {
          title: '柱状图',
          icon: 'PieChart'
        },
        component: () => import('@/views/echarts/histogram/index.vue')
      },
      {
        path: '/echarts/lineChart',
        name: 'lineChart',
        meta: {
          title: '折线图',
          icon: 'PieChart'
        },
        component: () => import('@/views/echarts/lineChart/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      icon: 'Menu'
    },
    hidden: true,
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      icon: 'Menu'
    },
    hidden: true,
    component: () => import('@/views/404.vue')
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
