import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { resolve } from 'path'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, __dirname)
  const NODE_ENV = env.MODE
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
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
