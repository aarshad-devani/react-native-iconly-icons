import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUp2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M5 15.5s4.144-7 7-7c2.855 0 7 7 7 7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUp2Curved
