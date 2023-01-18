import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRightLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowRightLight
