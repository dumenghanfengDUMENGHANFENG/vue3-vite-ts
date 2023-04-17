declare global {
  // 公共
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  // element-plus默认类
  type FormRules = import("element-plus/es").FormRules;
  type FormInstance = import("element-plus/es").FormInstance;
}

export {};
