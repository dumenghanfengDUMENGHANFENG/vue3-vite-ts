import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  PureHttpError,
  PureHttpRequestConfig,
  PureHttpResponse,
  RequestConfig
} from "../types/request";
import { getToken } from "@/plugins/modules/cookie";
// axios基础配置
const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_API, // api 的 base_url
  timeout: 300000,
  withCredentials: false
};
// 保存当前Axios实例对象
const service: AxiosInstance = Axios.create(defaultConfig);
// 请求前
service.interceptors.request.use(
  (config: PureHttpRequestConfig) => {
    if (getToken()) {
      config.headers["Token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 请求后
service.interceptors.response.use(
  (response: PureHttpResponse) => {
    return response.data;
  },
  (error: PureHttpError) => {
    let code = 0;
    try {
      code = error.response.status;
    } catch (e) {
      if (error.toString().indexOf("Error: timeout") !== -1) {
        console.log(error, "网络请求超时");
        return Promise.reject(error);
      }
    }
    if (code) {
      if (code === 401) {
        console.log(error, "401");
      } else if (code === 403) {
        console.log(error, "403");
      } else {
        console.log("111");
      }
    } else {
      console.log(error, "接口请求失败");
    }
    return Promise.reject(error);
  }
);
// 转换get/post传值
export const request = (config: RequestConfig) => {
  if (config.method.toLowerCase() === "post") {
    const params = config.kvs;
    config.data = params;
  } else {
    config.params = config.kvs;
  }
  return service(config);
};
