
# vue3-vite-ts

## 介绍

- 项目使用vue3+vite+ts+jsx+pinia+element-plus
- 练习之作,仅一家之言,若有不足还请指正
- 联系方式 1254442318@qq.com

## 项目结构

   ```html
   - dist 打包后文件
   - node_modules  node包
   - src 主目录
      - api 接口文件
      - assets 图片
      - components 组件
      - layout layout布局
      - locales 国际化配置
      - modules 自定义指令
      - router 路由
      - store pinia[配置
      - style css样式
      - utils 公共方法处理
      - views 整体页面
      - App.vue 入口文件
      - main.ts
   - .env 环境变量配置
   - .eslintrc 格式检验
   - package.json
   - tsconfig.json ts配置
   - vite.config.ts vite配置

```

## 流程

- 推荐整体插件使用统一的node下载,比如同一npm,pnpm,yarn等 尽量不要混用,亲历混用下载容易打包出问题提示没有对应的插件
- 下面流程为大致流程

1. 代码风格配置

   ```html
      # eslint 安装
      npm add eslint --dev
      # eslint 插件安装
      npm add eslint-plugin-vue --dev
      npm add @typescript-eslint/eslint-plugin --dev
      npm add eslint-plugin-prettier --dev
      npm add @typescript-eslint/parser --dev

      # 安装 prettier
      npm add prettier --dev
      # 安装插件 eslint-config-prettier(解决 eslint 和 prettier 冲突)
      npm add eslint-config-prettier --dev

      新建文件
      .eslintrc.js
      .eslintignore
      .prettierrc.js
      .prettierignore

      使用husky和lint-staged构建代码
      npm i --save-dev husky lint-staged
      package.json添加
         "husky": {
            "hooks": {
                  "pre-commit": "lint-staged"
            }
         },
         "lint-staged": {
            "src*/**/*.ts": [
                  "prettier --config .prettierrc.js --write",
                  "eslint",
                  "git add"
            ],
            "src*/**/*.json": [
                  "prettier --config .prettierrc.js --write",
                  "eslint",
                  "git add"
            ]
   ```

2. 安装vite npm init @vitejs/app
3. 初始化项目 npm init vite@latest vue3-vite-ts(根据提示选择自己需要,vue->vue+ts)
4. 下载node包,启动项目
5. css 预处理器 scss

   ```html
   npm add dart-sass --dev
   npm add sass --dev

   vite 配置(此处引用main就不用在全局引入)
   需要同步配置别名
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
      }
   }
   若有也报错 npm install @types/node --save-dev
   ts配置
      "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响
      "paths": {
         // 用于设置模块名称到基于baseUrl的路径映射
         "@/*": ["src/*"]
   }
   css: {
   preprocessorOptions: {
      scss: {
         additionalData: `@import "@/style/index.scss";`
      }
   }
   }

   ```

6. router下载

   ```html
    npm add vue-router@4

    封装router需要另外插件
    npm install --save nprogress
    npm install vue-cookies --save
   ```

7. vuex替代版本pinia

   ```html
    npm i pinia --save
    npm i pinia-plugin-persist --save

    该方式有两种引用,一种直接main引用一种在vite引用
   ```

8. 接口封装 npm add axios
9. ui框架项目使用element-plus
   - npm install element-plus --save
   - 目前使用的是自动引入,但自动引入有一堆坑,项目使用的按需引入+自动引入配合(有好方法请联系)
10. 若使用jsx方法

      ```html
      npm add @vitejs/plugin-vue-jsx
      npm i unplugin-vue-define-options -D
      具体配置可以百度

      ```

11. 国际化配置 npm install vue-i18n,在使用时要注意对其封装
12. echarts 的使用 看官网就行
13. vite 对系统优化

   ```html

   npm install unplugin-vue-components
   npm i unplugin-vue-components -D
   自动导入ElementPlus 组件
   自动引入使用的css样式不推荐使用自动引入css还是直接引入

   npm i -D unplugin-auto-import
   自动导入页面常用方法,为解决使用
      在vue3中使用东西需要先引入在声明
         import { useRouter } from 'vue-router'
         const router = useRouter() //路由跳转

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
   ```

## 自定义组件

- communalDialog 该组件仅适用于通用弹窗即弹窗内没有负责的操作仅有展示提交等功能

    ```html
    <CommunalDialog
        :title="'弹窗1'"
        :width="'50%'"
        :dialogIsShow="dialogIsShow"
        :dialogLoading="dialogLoading"
        @handle-close="handleClose"
        @submit="submit"
    >
        <template #default>我是默认插槽哦</template>
    </CommunalDialog>

    通用弹窗
        #default 默认插槽
        title 弹窗标题
        width 弹窗宽度
        dialogIsShow 是否打开弹窗
        cancelIsShow 是否隐藏取消按钮默认true
        saveIsShow 是否隐藏提交按钮默认true
        submit 提交按钮名字 默认确定
        dialogLoading 提交loading动画
        @handle 取消事件
        @submit 提交事件
    ```

- queryForm 该组件为页面内部通用搜索表单,支持自定义内容,目前内部有输入框,下拉框,时间组件,可根据需求再行添加

    ```html
    <QueryForm
        :label-width="'80px'"
        :queryFormTags="queryFormTags"
        :queryFormObj="queryFormObj"
        :queryFormSelect="queryFormSelect"
        :foldIsShow="foldIsShow"
        :foldIndex="foldIndex"
    />

    搜索表单
        若有默认值回填则取消清空按钮否则默认有清空
        当清空时默认删除表单对象中的属性
    Input 输入框
    Select 选择框
    treeSelect 树形选择框
    datePicker 时间选择
    上述所需值可根据element文档进行修改
    labelWidth 表单label宽度
    queryFormTags 表单label值每一项类型
    clearable 是否可清空 默认true
    disabled 是否禁用 默认false
    下拉框
        filterable 查询
        multiple 多选
    树形选择框
        show-checkbox 展示样式checkbox样式 默认false
    queryFormObj 表单回填值
    queryFormSelect 表单下拉框数组

    foldIsShow 是否开启展开按钮
    foldIndex 几条数据后开启展开按钮
    showCollapse 展开/收起
    ```

- tableProBar 该组件为页面通用表格,不支持多级表头,树形表格合并行列等表格

    ```html
    <TableProBar
    ref="Table"
    :tableData="tableData"
    :tableList="tableList"
    :paginationQuery="paginationQuery"
    @sort-change="sortChange"
    @on-selection-change="onSelectionChange"
    @pagination-change="paginationChange"
    />
    表格
    tableData 表格数据
    tableList 列数据
    height 固定表头
    maxHeight 表格流体高度(最大高度)
    headerTemplete 自定义表头
    defaultTemplete 自定义列
    fixed 固定列
    width 列宽度
    minWidth 列最小宽度
    sortable: 排序
    sortChange: 排序点击事件
    onSelectionChange: 多选事件

    分页
    paginationQuery 分页数据
    currentPage 页数
    pageSize 条目数
    pageSizesList 条目数组
    total 总数
    disabled 是否禁用  默认false
    background 是否有背景 默认true
    layout 对齐方式  默认右对齐
    handleCurrentChange  页跳转
    handleSizeChange 条目切换
    paginationChange 分页数据变化传递
    ```

## 使用插件汇总

   ```html

   "dependencies": {
      "@element-plus/icons-vue": "^2.0.6",
      "@intlify/vite-plugin-vue-i18n": "^6.0.1",
      "@vitejs/plugin-vue-jsx": "^2.0.0",
      "axios": "^0.27.2",
      "echarts": "^5.3.3",
      "element-plus": "^2.2.9",
      "js-cookie": "^3.0.1",
      "nprogress": "^0.2.0",
      "pinia": "^2.0.14",
      "pinia-plugin-persist": "^1.0.0",
      "pinia-plugin-persistedstate": "^1.6.1",
      "qs": "^6.11.0",
      "screenfull": "^6.0.2",
      "vue": "^3.2.25",
      "vue-i18n": "^9.2.0",
      "vue-router": "4"
   },
   "devDependencies": {
      "@types/js-cookie": "^3.0.2",
      "@types/node": "^18.6.3",
      "@types/nprogress": "^0.2.0",
      "@typescript-eslint/eslint-plugin": "^5.30.5",
      "@typescript-eslint/parser": "^5.30.5",
      "@vitejs/plugin-vue": "^2.3.3",
      "consola": "^2.15.3",
      "cross-env": "^7.0.3",
      "eslint": "^8.19.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-prettier": "^4.2.1",
      "eslint-plugin-vue": "^9.2.0",
      "husky": "^8.0.1",
      "lint-staged": "^13.0.3",
      "node-sass": "^7.0.1",
      "prettier": "^2.7.1",
      "sass": "^1.53.0",
      "sass-loader": "^13.0.2",
      "terser": "^5.14.2",
      "typescript": "^4.5.4",
      "unplugin-auto-import": "^0.9.2",
      "unplugin-vue-components": "^0.21.1",
      "unplugin-vue-define-options": "^0.6.1",
      "vite": "^3.0.0",
      "vite-plugin-components": "^0.13.3",
      "vite-plugin-style-import": "^2.0.0",
      "vue-tsc": "^0.34.7"
   }

   ```

## 结言

- 真的想吐槽,开发的过程中使用element-plus+vite感觉前后矛盾好多,根据官方给的文档出来后出了N种问题,单独使用vite按需引入自动导入,尼玛结果element-plus的样式不全,element-plus自动导入在jsx写法中又飘红一片只能单独适配(modules/elePlusOperation)
- pinia总感觉每次使用都要单独引入自己封装成了store使用,我是感觉爽了,但不知道有没有问题
- ts的各种要求写的我是真的好无奈啊,但感觉如果一个项目用ts写完后后续维护是个人都行了
- 对于自定义组件原本想用index.vue后来发现还是用tsx写起来更爽,在写组件之类的东西前一定要先确定好ui框架的引用方式,作者最初直接全局引入,没有一点报错,后续想要优化出了一堆问题,真的头大
- layout的设计感觉问题多多,与pinia的配合感觉不是很好
- axios修饰器的使用,这个原本是不想用的结果被后台给的接口折磨了,无奈只能使用修饰器
- vue3的组合API让我越来越有种写react的感觉
