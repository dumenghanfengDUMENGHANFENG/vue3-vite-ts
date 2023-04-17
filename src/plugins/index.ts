import type { App } from "vue";
const plugins = (app: App<Element>) => {
  setupI18n(app);
  elePlusOperation(app);
};
export default plugins;
