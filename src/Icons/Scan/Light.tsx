import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ScanLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M22.5 12.806h-21M20.63 8.595V7.082a3.732 3.732 0 0 0-3.733-3.732h-1.205M3.37 8.595V7.082A3.732 3.732 0 0 1 7.103 3.35H8.34M20.63 12.805v4.074a3.733 3.733 0 0 1-3.733 3.733h-1.205M3.37 12.805v4.074a3.733 3.733 0 0 0 3.733 3.733H8.34"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ScanLight
