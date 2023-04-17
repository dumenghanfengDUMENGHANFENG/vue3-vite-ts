import { defineConfig, loadEnv } from "vite";
// import { resolve } from 'path'
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from "vite-plugin-style-import";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, __dirname);
  const NODE_ENV = env.MODE;
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          {
            // "@/plugins/i18n": ["i18nt"], //自动导入i18nt方法不用再次注册or导入
            // "@/utils/request/request": ["request"]
            // "@/utils/request/request": ["request"]
            // 'vue-router': ['createRouter', 'RouteRecordRaw', 'createWebHashHistory']//只限main和.vue中使用分开导入容易出问题还是全部倒入
          }
        ],
        dts: "src/types/auto-imports.d.ts", // 生成 `auto-import.d.ts` 全局声明
        dirs: [
          "src/settings",
          "src/store/modules",
          "src/plugins/modules",
          "src/hooks"
          // "src/utils"
        ], //自动导入默认方法(constants全部变量,store/modules全局pinia)
        eslintrc: {
          enabled: true, //不需要增加配置将 enabled: true 设置为 false，否则每次都会生成这个文件。
          filepath: "./.eslintrc- auto-import.json",
          globalsPropValue: true
        },
        resolvers: [
          // 自动导入element-plus组件
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon"
          })
        ]
      }),
      Components({
        dts: "src/types/components.d.ts", //默认导出'./components.d.ts'
        dirs: ["src/components/overall-ui"], //自动导入(公共组件)指定位置组件默认是 src/components该路径为了公共组件与私有组件的区分
        resolvers: [
          // 自动导入element-plus组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"]
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()], //按需导入组件样式
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name: string) => {
              return `element-plus/theme-chalk/${name}.css`;
            }
          }
        ]
      }),
      vueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: path.resolve(__dirname, "src/locales/**")
      })
    ],
    base: NODE_ENV === "development" ? "/" : "./",
    server: {
      open: false, // 是否自动在浏览器打开
      https: false, // 是否开启 https
      port: 3000, //启动端口
      host: "0.0.0.0",
      proxy: {
        "/api": env.VITE_APP_BASE_API //代理网址
      },
      cors: true
    },
    resolve: {
      alias: {
        // '@': resolve(__dirname, './src')
        "@": `${path.resolve(__dirname, "./src")}`
      }
    },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: "import { h } from 'vue';"
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/index.scss";'
        }
      }
    },
    build: {
      sourcemap: false,
      minify: "terser",
      target: "modules", //浏览器兼容性modules|esnext
      assetsDir: "assets", // 指定生成静态资源的存放路径
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
            if (id.includes(path.resolve(__dirname, "/src/store/index.ts"))) {
              return "vendor";
            }
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split("/")
              : [];
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || "[name]";
            return `assets/js/${fileName}/[name].[hash].js`;
          }
        }
      }
    }
  });
};
