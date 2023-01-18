import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
      fill={props.fillColor}
    />
    <Path
      d="M15.573 15.815a.756.756 0 0 1-.384-.105l-3.926-2.343a.754.754 0 0 1-.365-.645V7.676a.75.75 0 0 1 1.5 0v4.62l3.56 2.123a.752.752 0 0 1-.385 1.396"
      fill={props.fillColor}
    />
  </Svg>
)
export default TimeCircleBulk
