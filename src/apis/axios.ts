export const AxiosApis = {
  login(kvs?: any) {
    return request({
      url: "/config/Menu/GetModuleRoutes",
      method: "get",
      kvs
    });
  }
};
