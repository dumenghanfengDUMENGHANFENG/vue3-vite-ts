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
  | BarSeriesOption //series 柱状图
  | TitleComponentOption //title
  | TooltipComponentOption //tooltip
  | GridComponentOption //grid
  | DatasetComponentOption //dataset
>
type lineType = ComposeOption<LineSeriesOption> //series 折线图
export { ECOption, lineType }
