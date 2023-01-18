import React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const DiscoveryLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="m8.27 14.952 1.593-5.09 5.089-1.592-1.593 5.09-5.089 1.592Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={11.611}
      cy={11.611}
      r={9.611}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DiscoveryLight
