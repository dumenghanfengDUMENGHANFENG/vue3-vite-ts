const vueXStore = defineStore('vueX', {
  state: () => {
    return {
      vueXStore: '测试'
    }
  },
  getters: {},
  actions: {
    changeGoods(item: string) {
      this.vueXStore = item
    }
  }
})

export default vueXStore
