import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { resolve } from 'path'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, __dirname)
  const NODE_ENV = env.MODE
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            '@/store/index': ['store'], //自定义导入store
            'vue-i18n': ['useI18n'] //自定义导入国际化
            // 'vue-i18n': ['createI18n']
            // 'vue-router': ['createRouter', 'RouteRecordRaw', 'createWebHashHistory']//只限main和.vue中使用分开导入容易出问题还是全部倒入
          }
        ],
        dts: './auto-imports.d.ts', // 生成 `auto-import.d.ts` 全局声明
        eslintrc: {
          enabled: true, //不需要增加配置将 enabled: true 设置为 false，否则每次都会生成这个文件。
          filepath: './.eslintrc- auto-import.json',
          globalsPropValue: true
        },
        resolvers: [ElementPlusResolver()]
      }),
      // 自动导入ElementPlus 组件
      Components({
        dts: true, //默认导出'./components.d.ts'
        resolvers: [ElementPlusResolver()]
      }),
      // 按需引入自动导入ElementPlus样式(css)
      // createStyleImportPlugin({
      //   resolves: [ElementPlusResolve()],
      //   libs: [
      //     {
      //       libraryName: 'element-plus',
      //       esModule: true,
      //       resolveStyle: (name: string) => {
      //         return `element-plus/theme-chalk/${name}.css`
      //       }
      //     }
      //   ]
      // }),
      vueI18n({
        include: path.resolve(__dirname, './path/to/src/locales/**')
      })
    ],
    base: NODE_ENV === 'development' ? '/' : './',
    server: {
      open: true, // 是否自动在浏览器打开
      https: false, // 是否开启 https
      port: 3000, //启动端口
      proxy: {
        '/api': env.VITE_APP_BASE_API //代理网址
      },
      cors: true
    },
    resolve: {
      alias: {
        // '@': resolve(__dirname, './src')
        '@': `${path.resolve(__dirname, './src')}`
      }
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue';"
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "@/style/index.scss";`
    //     }
    //   }
    // },
    build: {
      sourcemap: false,
      minify: 'terser',
      target: 'modules', //浏览器兼容性modules|esnext
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
            if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor'
            }
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []
            const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
            return `assets/js/${fileName}/[name].[hash].js`
          }
        }
      }
    }
  })
}
