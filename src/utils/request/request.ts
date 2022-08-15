import Axios from 'axios'
import {
  AxiosInstance,
  AxiosRequestConfig,
  PureHttpError,
  PureHttpRequestConfig,
  PureHttpResponse,
  RequestConfig
} from './types.d'
import { getToken } from '@/utils/cookie'
// axios基础配置
const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_API, // api 的 base_url
  timeout: 300000,
  withCredentials: false
}
// 保存当前Axios实例对象
const service: AxiosInstance = Axios.create(defaultConfig)
// 请求前
service.interceptors.request.use(
  (config: PureHttpRequestConfig) => {
    if (getToken()) {
      config.headers['Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 请求后
service.interceptors.response.use(
  (response: PureHttpResponse) => {
    // var result = response.data.message
    // if (result >= 1005 && result <= 1013) {
    //   // 用户登录界面提示 这谁改的,我就说token失效了咋不跳回登陆界面
    //   // 使用this.$route 这辈子也跳不过去
    //   // Cookies.set('point', 401)
    //   // this.$route.push({ name: 'Login' })
    //   store.dispatch('LogOut').then(() => {
    //     Notification.error({
    //       title: 'login error',
    //       duration: 5000
    //     })
    //     Cookies.set('point', 401)
    //     location.reload()
    //   })
    // }
    // const code = response.status
    // if (code < 200 || code > 300) {
    //   Notification.error({
    //     title: response.data.message
    //   })
    //   return Promise.reject('error')
    // } else {
    //   return response.data
    // }
    return response.data
  },
  (error: PureHttpError) => {
    let code = 0
    try {
      // code = error.response.data.status
      code = error.response.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        console.log(error, '网络请求超时')
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {
        console.log(error, '401')
      } else if (code === 403) {
        console.log(error, '403')
      } else {
        // const errorMsg = error.response.data.message
        console.log(error, '其他')
      }
    } else {
      console.log(error, '接口请求失败')
    }
    return Promise.reject(error)
  }
)
// 转换get/post传值
const http = (config: RequestConfig) => {
  if (config.method.toLowerCase() === 'post') {
    const params = config.kvs
    config.data = params
  } else {
    config.params = config.kvs
  }
  return service(config)
}
export default http
