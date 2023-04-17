import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw
} from "vue-router";
import { routerBasicsList } from "./routerBasics";
const routes: RouteRecordRaw[] = [...routerBasicsList];
const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH as string), // 改为这种HASH路由模式
  routes
});
// 路由白名单
const whiteList = ["/Login"];
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: any
  ) => {
    if (to.meta.title) {
      document.title = to.meta.title + " - Vue3+Vite+TS";
    }
    const store = layoutStore();
    const { refreshIndex, asidePath, asideObj, asideList } = storeToRefs(store);
    NProgressStart();
    if (getToken()) {
      if (to.path === "/login") {
        next("/");
      } else {
        asidePath.value = to.path;
        store.addTabs({ name: to.name?.toString(), path: to.path });
        //refreshIndex===0代表刷新页面添加动态路由
        if (refreshIndex.value === 0) {
          if (Object.keys(asideObj.value).length === 0) {
            await store.loginSignIn();
          }
          router.addRoute(asideList.value);
          if (to.name === "404") {
            //解决动态路由刷新404
            const path = to.fullPath;
            next({ path, replace: true });
            return false;
          }
          refreshIndex.value = 1;
          next();
        } else {
          next();
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        // 不在白名单
        store.reset();
        // 重定向到登录页
        next(`/Login?redirect=${to.fullPath}`);
      }
    }
    NProgressClose();
  }
);
export default router;
