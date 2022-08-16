const routerMap = [
  {
    path: '/workbench',
    name: 'workbench',
    meta: {
      title: 'Workbench',
      icon: 'MessageBox'
    },
    component: () => import('@/views/workbench/index.vue')
  },
  {
    path: '/vueApi',
    name: 'vueApi',
    meta: {
      title: 'Workbench',
      icon: 'Menu'
    },
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
      title: 'eleUi',
      icon: 'Brush'
    },
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
      }
    ]
  }
]
export default routerMap
