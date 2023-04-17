import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
export interface PureHttpError extends AxiosError {
  isCancelRequest?: boolean;
  response?: any;
}
export interface PureHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: PureHttpRequestConfig) => void;
  headers?: any;
}
export interface PureHttpResponse extends AxiosResponse {
  config: PureHttpRequestConfig;
}
export interface RequestConfig {
  url: string;
  method: string;
  kvs?: Object;
  data?: any;
  params?: any;
}
