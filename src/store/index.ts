import appStore from './modules/app'
import vueXStore from './modules/vueX'
import layoutStore from './modules/layout'
import loginStore from './modules/login'
export const store = (() => {
  return {
    app: appStore(),
    layout: layoutStore(),
    vueX: vueXStore(),
    login: loginStore()
  }
})()
