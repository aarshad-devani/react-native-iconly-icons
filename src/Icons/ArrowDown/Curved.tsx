import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDownCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12.274 19.75v-15M18.299 13.7s-3.261 6.05-6.023 6.05c-2.764 0-6.026-6.05-6.026-6.05" />
    </G>
  </Svg>
)
export default ArrowDownCurved
