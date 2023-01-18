import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SwapCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.979 4.601V17.22M2.9 8.7s2.169-4.1 4.078-4.1c1.908 0 4.078 4.1 4.078 4.1M16.906 19.428V6.81M20.985 15.329s-2.17 4.1-4.078 4.1c-1.908 0-4.078-4.1-4.078-4.1" />
    </G>
  </Svg>
)
export default SwapCurved
