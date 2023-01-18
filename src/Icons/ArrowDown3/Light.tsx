import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDown3Light = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12.251 12.7V3.75"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m7.25 12.7 5.001 7.937 5.001-7.937H7.25Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowDown3Light
