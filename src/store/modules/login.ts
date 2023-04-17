type layoutType = {
  loginObj: any;
};
export const loginStore = defineStore("login", {
  state: (): layoutType => {
    return {
      loginObj: {}
    };
  },
  persist: {
    //  数据持久化
    enabled: true, // 开启存储
    strategies: [
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      {
        key: "loginStore",
        storage: sessionStorage,
        paths: ["loginObj"]
      }
    ]
  }
});
