import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowRightCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19.75 11.726h-15M13.7 5.701s6.05 3.261 6.05 6.023c0 2.764-6.05 6.026-6.05 6.026" />
    </G>
  </Svg>
)
export default ArrowRightCurved
