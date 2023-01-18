import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LogoutTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M15.016 7.39v-.934a3.685 3.685 0 0 0-3.685-3.685H6.456a3.685 3.685 0 0 0-3.684 3.685v11.13a3.685 3.685 0 0 0 3.684 3.686h4.885a3.675 3.675 0 0 0 3.675-3.674v-.944"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.81 12.021H9.769M18.881 9.106l2.928 2.915-2.928 2.916"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default LogoutTwotone
