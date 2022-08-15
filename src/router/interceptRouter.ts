import router from './index'
import layoutStore from '@/store/modules/layout'
import loginStore from '@/store/modules/login'
import { NProgressStart, NProgressClose } from '@/utils/nporgress'
import { getToken } from '@/utils/cookie'
import routerMap from '@/router/routerMap'
// 路由白名单
const whiteList = ['/login', '/404', '/redirect']
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - Vue3+Vite+TS'
  }
  NProgressStart()
  const token = getToken() //获取token
  if (token) {
    layoutStore().modifyPath(to.path)
    if (to.path === '/login') {
      next('/')
      NProgressClose()
    } else {
      const existenceIsShow = existence(routerMap, to.path)
      if (existenceIsShow) {
        next()
      } else {
        if (whiteList.indexOf(to.path) !== -1) {
          next()
        } else {
          next(`/404`)
        }
      }
    }
  } else {
    // 白名单
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 不再白名单
      layoutStore().reset()
      loginStore().logOut()
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgressClose()
    }
  }
})

router.afterEach(() => {
  NProgressClose()
})
// 路径是否在路由列表中
function existence(list: any, path: string) {
  if (Array.isArray(list) && list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].path === path) {
        return true
      } else {
        const isShow: any = existence(list[i].children, path)
        if (isShow) return isShow
      }
    }
  }
}
