import { vLoading } from "element-plus/es/components/loading/src/directive";
import type { App } from "vue";
const directive = (app: App<Element>) => {
  app.directive("loading", vLoading); //v-loading
};
export default directive;
