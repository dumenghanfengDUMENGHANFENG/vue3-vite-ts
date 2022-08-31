import { loginType, loginFormType } from '../type/app'
import { setToken, delToken } from '@/utils/cookie'
import { LoginApis } from '@/api/login'
const loginStore = defineStore('login', {
  state: (): loginType => {
    return {
      username: '',
      userID: '',
      token: ''
    }
  },
  getters: {},
  actions: {
    // 登录
    loginSignIn(ruleForm: loginFormType) {
      return new Promise((resolve, reject) => {
        LoginApis.login({ ...ruleForm })
          .then((res) => {
            this.username = res.data.user.userName
            this.userID = res.data.user.userID
            this.token = res.data.token
            setToken(res.data.token, 3)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {
        LoginApis.getInfo()
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 退出登录
    logOut() {
      return new Promise((resolve, reject) => {
        LoginApis.logout()
          .then((res) => {
            sessionStorage.removeItem('layoutStore')
            delToken()
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    delToken() {
      delToken()
    }
  },
  persist: {
    //  数据持久化
    enabled: true, // 开启存储
    strategies: [
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      { key: 'loginStore', storage: sessionStorage, paths: ['username'] }
    ]
  }
})
export default loginStore
