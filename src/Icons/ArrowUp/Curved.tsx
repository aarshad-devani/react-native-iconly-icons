import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUpCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.726 4.25v15M5.701 10.3s3.261-6.05 6.023-6.05c2.764 0 6.026 6.05 6.026 6.05" />
    </G>
  </Svg>
)
export default ArrowUpCurved
