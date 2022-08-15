export type loginType = {
  username: string
  userID: string
  token: string
}
export type loginFormType = {
  username: string
  password: string
  loginType: number
}
export type appType = {
  name: string
  code: number
  toke?: number
}
export type layoutType = {
  routerList: {
    name: string
    path: string
  }[]
  asideIsShow: Boolean
  path: string
  tabsList: {
    name: string
    path: string
  }[]
}
export type layoutTypeAdd = {
  name: string
  path: string
}
