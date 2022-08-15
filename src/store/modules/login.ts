import { defineStore } from 'pinia'
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
            const token = {
              name: this.username,
              token: this.token
            }
            setToken(JSON.stringify(token), 3)
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
            console.log(res)
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
  }
})
export default loginStore
