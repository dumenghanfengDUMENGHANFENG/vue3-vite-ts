export const LayoutApis = {
  aside(kvs?: any) {
    return request({
      url: "/layout/asideList",
      method: "get",
      kvs
    });
  },
  headers(kvs?: any) {
    return request({
      url: "/layout/headersList",
      method: "get",
      kvs
    });
  }
};
export type listType = {
  id: string | number;
  name: string;
};
