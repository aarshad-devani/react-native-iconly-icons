import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRight2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M8.5 5s7 4.144 7 7c0 2.855-7 7-7 7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowRight2Curved
