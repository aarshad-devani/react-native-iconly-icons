import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeCircleLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M21.25 12A9.25 9.25 0 0 1 12 21.25 9.25 9.25 0 0 1 2.75 12 9.25 9.25 0 0 1 12 2.75 9.25 9.25 0 0 1 21.25 12Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m15.431 14.943-3.77-2.25V7.848"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default TimeCircleLight
