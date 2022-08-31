import request from '@/utils/request/request'
import { DefaultResolve } from '@/utils/decorator'
export class repairManageApis {
  @DefaultResolve
  // 列表接口
  static repairManageList(kvs: any) {
    return request({
      url: '/mtms/toolingModels/getlist',
      method: 'get',
      //   paramsSerializer: function (params) {
      //     return qs.stringify(params, { arrayFormat: 'repeat' })
      //   },
      kvs
    })
  }
  @DefaultResolve
  static add(kvs: any) {
    return request({
      url: '/mtms/toolingModels/add',
      method: 'post',
      kvs
    })
  }
  @DefaultResolve
  static get(kvs: any) {
    return request({
      url: '/mtms/toolingModels/get',
      method: 'get',
      kvs
    })
  }
  @DefaultResolve
  static del(kvs: any) {
    return request({
      url: '/mtms/toolingModels/delete',
      method: 'post',
      kvs
    })
  }
  @DefaultResolve
  static edit(kvs: any) {
    return request({
      url: '/mtms/toolingModels/Update',
      method: 'post',
      kvs
    })
  }
  @DefaultResolve
  static GetToolingTypeList() {
    return request({
      url: '/mtms/toolingBasicInfo/GetToolingTypeList',
      method: 'get'
    })
  }
}
