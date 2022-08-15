import request from '@/utils/request/request'
import { DefaultResolve } from '@/utils/decorator'
export class LoginApis {
  @DefaultResolve
  static login(kvs: any) {
    return request({
      url: '/config/login/login',
      method: 'post',
      kvs
    })
  }

  static getInfo() {
    return request({
      url: 'config/user/info',
      method: 'get'
    })
  }

  static logout() {
    return request({
      url: 'config/login/Logout',
      method: 'get'
    })
  }

  static getRouterMenuList() {
    return request({
      url: '/config/Menu/GetModules',
      method: 'get'
    })
  }
}
