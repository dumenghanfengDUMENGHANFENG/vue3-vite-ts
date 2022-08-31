import { ComposeOption } from 'echarts/core'
import { BarSeriesOption, LineSeriesOption } from 'echarts/charts'
import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  // 数据集组件
  DatasetComponentOption
} from 'echarts/components'
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>
export { ECOption }
