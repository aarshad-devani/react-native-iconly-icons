import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUp3Light = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M11.749 11.3v8.95"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m16.75 11.3-5.001-7.937L6.748 11.3H16.75Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUp3Light
