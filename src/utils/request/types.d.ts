import { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
export type AxiosInstance = AxiosInstance
export type AxiosRequestConfig = AxiosRequestConfig
export interface PureHttpError extends AxiosError {
  isCancelRequest?: boolean
  response?
}
export interface PureHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: PureHttpRequestConfig) => void
  beforeResponseCallback?: (response: PureHttpResponse) => void
  headers?
}
export interface PureHttpResponse extends AxiosResponse {
  config?: PureHttpRequestConfig
}
export type RequestConfig = {
  url: string
  method: string
  kvs?: Object
  data?
  params?
}
