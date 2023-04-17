export const LoginApis = {
  login(kvs?: any) {
    return request({
      url: "/login/login",
      method: "post",
      kvs
    });
  }
};
