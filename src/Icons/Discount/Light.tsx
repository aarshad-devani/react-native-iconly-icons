import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DiscountLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M4.795 7.056a2.262 2.262 0 0 1 2.261-2.262h1.029c.597 0 1.169-.237 1.593-.657l.719-.72a2.262 2.262 0 0 1 3.199-.009l.001.001.009.008.72.72a2.26 2.26 0 0 0 1.593.657h1.028a2.262 2.262 0 0 1 2.262 2.262v1.027c0 .597.236 1.17.657 1.594l.72.72c.886.881.891 2.313.01 3.199l-.001.001-.009.009-.72.72a2.256 2.256 0 0 0-.657 1.592v1.029a2.26 2.26 0 0 1-2.261 2.261h-1.031a2.26 2.26 0 0 0-1.593.658l-.72.719a2.261 2.261 0 0 1-3.2.009l-.009-.009-.719-.719a2.263 2.263 0 0 0-1.593-.658H7.056a2.26 2.26 0 0 1-2.261-2.261v-1.031c0-.597-.237-1.169-.658-1.592l-.719-.72a2.26 2.26 0 0 1-.009-3.2l.009-.009.719-.72c.421-.424.658-.996.658-1.594V7.056M9.432 14.572l5.14-5.14"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.495 14.5h.01M9.495 9.5h.01"
      stroke={props.fillColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DiscountLight
