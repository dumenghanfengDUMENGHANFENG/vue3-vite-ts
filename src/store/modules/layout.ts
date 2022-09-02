import { layoutType, layoutTypeAdd } from '../type/app'
const layoutStore = defineStore('layout', {
  state: (): layoutType => {
    return {
      tabsList: [],
      asideIsShow: false,
      path: ''
    }
  },
  actions: {
    // 新增路由
    addRouterList(item: layoutTypeAdd) {
      if (item.path === '/redirect' || item.path === '/404') return
      const index = this.tabsList.findIndex((ele) => ele.path === item.path)
      if (index === -1) {
        this.tabsList.push(item)
      }
      this.path = item.path
    },
    // 删除路由
    removeTabsList(name: string) {
      if (name === '/workbench') return
      const index = this.tabsList.findIndex((ele) => ele.path === name)
      this.tabsList.splice(index, 1)
      if (this.path === name) {
        if (index < this.tabsList.length) {
          this.path = this.tabsList[index].path
        } else {
          this.path = this.tabsList[index - 1].path
        }
      } else {
        this.path === name
      }
    },
    // 关闭其它路由
    closeOther(name: string) {
      const currentObj: any = this.tabsList.find((ele) => ele.path === name)
      const oneObj: any = this.tabsList[0]
      this.tabsList = [].concat(oneObj, currentObj)
    },
    // 关闭全部
    closeAll() {
      this.tabsList.splice(1, this.tabsList.length - 1)
    },
    // 侧边栏开关
    asideIsShowClick(isShow: Boolean) {
      this.asideIsShow = isShow
    },
    // 重置
    reset() {
      this.tabsList = []
      this.asideIsShow = false
      this.path = '/workbench'
    }
  },
  persist: {
    //  数据持久化
    enabled: true, // 开启存储
    strategies: [
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      { key: 'layoutStore', storage: sessionStorage, paths: ['tabsList', 'path', 'asideIsShow'] }
    ]
  }
})
export default layoutStore
