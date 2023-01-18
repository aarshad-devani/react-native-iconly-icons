import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUpLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M11.726 4.25v15M5.701 10.3l6.024-6.05 6.025 6.05"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUpLight
