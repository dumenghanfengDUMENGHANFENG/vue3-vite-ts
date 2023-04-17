type layoutType = {
  loginObj: any;
  refreshIndex: number;
  asideObj: any;
  asidePath: string;
  asideIsShow: boolean;
  headersId: string | number;
  headersList: {
    id: string | number;
    name: string;
  }[];
  tabsPathList: any;
};
import { LayoutApis } from "@/apis/layout";
import getRoutes from "@/router/autoload";
export const layoutStore = defineStore("layout", {
  state: (): layoutType => {
    return {
      loginObj: {},
      refreshIndex: 0,
      asideObj: {},
      asidePath: "/",
      asideIsShow: false,
      headersId: "element",
      headersList: [],
      tabsPathList: []
    };
  },
  getters: {
    asideList: (state): any => getRoutes(state.asideObj)
  },
  actions: {
    // 重置
    reset() {
      this.$reset();
    },
    // 新增标签
    addTabs(item: { name: string | undefined; path: string }) {
      if (item.path.includes("/redirect") || item.path === "/404") return;
      const index = this.tabsPathList.findIndex(
        (ele: { path: string }) => ele.path === item.path
      );
      if (index === -1) {
        this.tabsPathList.push(item);
      }
    },
    // 删除路由
    removeTabsList(name: string) {
      if (name === "/workbench") return;
      const index = this.tabsPathList.findIndex(
        (ele: { path: string }) => ele.path === name
      );
      this.tabsPathList.splice(index, 1);
      if (this.asidePath === name) {
        if (index < this.tabsPathList.length) {
          this.asidePath = this.tabsPathList[index].path;
        } else {
          this.asidePath = this.tabsPathList[index - 1].path;
        }
      } else {
        this.asidePath === name;
      }
    },
    // 关闭其它路由
    closeOther(name: string) {
      const currentObj: any = this.tabsPathList.find(
        (ele: { path: string }) => ele.path === name
      );
      const oneObj: any = this.tabsPathList[0];
      this.tabsPathList = [].concat(oneObj, currentObj);
    },
    // 关闭全部
    closeAll() {
      this.tabsPathList.splice(1, this.tabsPathList.length - 1);
    },
    // 获取侧边栏数据
    loginSignIn() {
      return new Promise((resolve, reject) => {
        LayoutApis.aside({
          id: this.headersId
        })
          .then((res: any) => {
            this.asideObj = res.data;
            resolve(res.data);
          })
          .catch(() => {
            reject([]);
          });
      });
    },
    loginSignOut() {
      this.headersList = [];
      this.headersId = "eleUi";
      delToken();
    }
  },
  persist: {
    //  数据持久化
    enabled: true, // 开启存储
    strategies: [
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      {
        key: "layoutStore",
        storage: sessionStorage,
        paths: ["headersId", "headersList", "tabsPathList"]
      }
    ]
  }
});
