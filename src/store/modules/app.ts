import { defineStore } from 'pinia'
import { appType } from '../type/app'
const appStore = defineStore('app', {
  state: (): appType => {
    return {
      name: '测试',
      code: 0
    }
  },
  getters: {
    // nameNew(): string {
    //   return this.name;
    // },
    nameNew: (state): string => state.name
  },
  actions: {
    changeGoods(item: string): void {
      this.name = item
    }
  }
  // persist: {
  //   //  数据持久化
  //   enabled: true, // 开启存储
  //   strategies: [
  //     //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
  //     { key: 'appStore', storage: localStorage, paths: ['name'] }
  //   ]
  // }
})
export default appStore
