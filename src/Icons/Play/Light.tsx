import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M12 2.5c5.246 0 9.5 4.253 9.5 9.5s-4.254 9.5-9.5 9.5A9.5 9.5 0 0 1 2.5 12 9.5 9.5 0 0 1 12 2.5Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M15 11.995c0-.811-4.158-3.406-4.63-2.94-.47.467-.516 5.369 0 5.88.518.512 4.63-2.129 4.63-2.94Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PlayLight
