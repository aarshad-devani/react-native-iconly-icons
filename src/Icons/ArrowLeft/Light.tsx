import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowLeftLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowLeftLight
