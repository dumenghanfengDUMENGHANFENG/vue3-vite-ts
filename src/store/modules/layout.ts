import { defineStore } from 'pinia'
import { layoutType, layoutTypeAdd } from '../type/app'
const layoutStore = defineStore('layout', {
  state: (): layoutType => {
    return {
      routerList: [
        {
          path: '/workbench',
          name: '工作台'
        }
      ],
      tabsList: [
        {
          path: '/workbench',
          name: '工作台'
        }
      ],
      asideIsShow: false,
      path: '/workbench'
    }
  },
  actions: {
    // 新增路由
    addRouterList(oneItem: layoutTypeAdd, twoItem?: layoutTypeAdd) {
      if (twoItem) {
        this.routerList.splice(1, 2)
        this.routerList.push(twoItem)
        this.routerList.push(oneItem)
      } else {
        if (oneItem.path === '/workbench') {
          this.routerList.splice(1, this.routerList.length)
        } else {
          this.routerList.splice(1, this.routerList.length)
          this.routerList.push(oneItem)
        }
      }
      const index = this.tabsList.findIndex((ele) => ele.path === oneItem.path)
      if (index === -1) {
        this.tabsList.push(oneItem)
        this.path = oneItem.path
      }
    },
    // 删除路由
    removeTabsList(name: string) {
      const index = this.tabsList.findIndex((ele) => ele.path === name)
      this.tabsList.splice(index, 1)
      if (this.path === name) {
        if (this.tabsList.length === 1) {
          this.path = '/workbench'
        } else {
          if (index < this.tabsList.length) {
            this.path = this.tabsList[index].path
          } else {
            this.path = this.tabsList[index - 1].path
          }
        }
      }
    },
    // 当前路由
    modifyPath(item: string) {
      this.path = item
    },
    // 侧边栏开关
    asideIsShowClick(isShow: Boolean) {
      this.asideIsShow = isShow
    },
    // 重置
    reset() {
      this.routerList = [
        {
          path: '/workbench',
          name: '工作台'
        }
      ]
      this.tabsList = [
        {
          path: '/workbench',
          name: '工作台'
        }
      ]
      this.asideIsShow = false
      this.path = '/workbench'
    }
  },
  persist: {
    //  数据持久化
    enabled: true, // 开启存储
    strategies: [
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      { key: 'layoutStore', storage: sessionStorage, paths: ['routerList', 'tabsList', 'path'] }
    ]
  }
})
export default layoutStore
