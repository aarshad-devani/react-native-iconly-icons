import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowLeft2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M15.5 19s-7-4.144-7-7c0-2.855 7-7 7-7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowLeft2Curved
