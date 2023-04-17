import type { App } from "vue";
import piniaPluginPersist from "pinia-plugin-persist";
const store = createPinia();
store.use(piniaPluginPersist);
export const setupStore = (app: App<Element>) => {
  app.use(store);
};
