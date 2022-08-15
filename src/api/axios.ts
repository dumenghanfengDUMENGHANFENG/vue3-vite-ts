import request from '@/utils/request/request'
import { DefaultResolve } from '@/utils/decorator'
export class AxiosApis {
  @DefaultResolve
  static login(kvs: any) {
    return request({
      url: '/config/login/login',
      method: 'post',
      kvs
    })
  }
  static login1(kvs: any) {
    return request({
      url: '/tms/Eqp/GetRealtimeData',
      method: 'post',
      kvs
    })
  }
}
export function login(kvs: any) {
  return request({
    url: '/config/login/login',
    method: 'post',
    kvs
  })
}
export function login1(kvs: any) {
  return request({
    url: '/tms/Eqp/GetRealtimeData',
    method: 'post',
    kvs
  })
}
