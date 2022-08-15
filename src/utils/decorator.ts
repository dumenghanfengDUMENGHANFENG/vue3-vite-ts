/*
修饰器
DefaultResolve  将.then()返回时的code===1 正常抛出,code===0 当做异常抛出
Options 处理code类型


target 修饰类
methodName 修饰类的属性
descriptor 属性本身
args 接口传值
oFunc 接口本身
.apply 启动
*/
type codeReturn = {
  code: Number
  data: any
  message: Number
}

const Options = {
  success(data: codeReturn) {
    return {
      result: data.code === 1,
      data: data
    }
  }
}
export function DefaultResolve(target: Object, methodName: String, descriptor: any) {
  return {
    value: (...args: Array<any>) => {
      const oFunc = descriptor.value
      return oFunc
        .apply(oFunc, args)
        .then((res: codeReturn) => {
          const nData = Options.success(res)
          if (nData.result) {
            return nData.data // 抛出
          } else {
            return Promise.reject(res) //返回一个被拒绝的Promise对象 走.catch
          }
        })
        .catch((err: codeReturn) => {
          return Promise.reject(err)
        })
    }
  }
}
