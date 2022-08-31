import { ElMessage } from 'element-plus'
type messageType = {
  type?: 'success' | 'warning' | 'error' | 'info'
  icon?: string
  message: string
  duration?: number
  center?: boolean
  dangerouslyUseHTMLString?: boolean
  offset?: number
  showClose?: boolean
}
/**
 全局引入(引入有两步不如单独引入)(当成方法)
 main.ts
 import { TipsMessage } from './components/tipsMessage/index'
 app.config.globalProperties.$TipsMessage = TipsMessage
 页面使用
   import { getCurrentInstance } from 'vue'
   const { proxy }: any = getCurrentInstance()
    proxy.$TipsMessage({
    type: 'warning',
    message: '测试'
    })
  TipsMessage({
      type: 'warning',
      message: '测试'
  })
 type 样式
  success 成功
  warning 消息
  error 警告
  info 错误
icon 自定义图标
message 内容
duration 持续时间
center 文字居中
dangerouslyUseHTMLString 是否开启html片段
   dangerouslyUseHTMLString: true,
   message: '<strong>This is <i>HTML</i> string</strong>'
offset Message 距离窗口顶部的偏移量
showClose 是否显示关闭按钮
 */

// Message 消息提示
export function TipsMessage(item: messageType) {
  return ElMessage({
    type: item.type ? item.type : 'success',
    icon: item.icon,
    message: item.message,
    duration: item.duration ? item.duration : 3000,
    center: item.center,
    dangerouslyUseHTMLString: item.dangerouslyUseHTMLString,
    offset: item.offset ? item.offset : 20,
    showClose: item.showClose
  })
}
