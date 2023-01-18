import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreCircleBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12Zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2ZM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 1 0-2.39 0Zm4.48 0a1.195 1.195 0 1 0 2.39 0 1.194 1.194 0 1 0-2.39 0Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MoreCircleBold
