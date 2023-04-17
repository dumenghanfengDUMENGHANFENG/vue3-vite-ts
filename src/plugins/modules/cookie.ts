/*
cookie
TOKEN_KEY cookie名称
setToken 存储cookie
getToken 获取cookie
delToken 删除cookie
*/
import Cookies from "js-cookie";

export const TOKEN_KEY = "loginCookie";

export const setToken = (token: string, cookieExpires: any) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 });
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) return token;
  else return false;
};

export const delToken = () => {
  Cookies.remove(TOKEN_KEY);
};
