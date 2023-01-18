import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DiscoveryBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
      fill={props.fillColor}
    />
    <Path
      d="m15.86 8.705-1.62 5.12c-.06.21-.23.38-.44.441l-5.1 1.6a.448.448 0 0 1-.56-.56l1.6-5.13c.06-.211.23-.371.44-.441l5.12-1.6c.35-.11.67.22.56.57"
      fill={props.fillColor}
    />
  </Svg>
)
export default DiscoveryBulk
