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
  @DefaultResolve
  static getInfo() {
    return request({
      url: 'config/user/info',
      method: 'get'
    })
  }
  @DefaultResolve
  static logout() {
    return request({
      url: 'config/login/Logout',
      method: 'get'
    })
  }
  @DefaultResolve
  static getRouterMenuList() {
    return request({
      url: '/config/Menu/GetModules',
      method: 'get'
    })
  }
}
