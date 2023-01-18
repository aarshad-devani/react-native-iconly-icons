import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreCircleTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M12 2.75A9.25 9.25 0 1 1 12 21.252 9.25 9.25 0 0 1 12 2.75Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M7.52 13.197a1.199 1.199 0 0 1 0-2.395 1.199 1.199 0 0 1 0 2.395ZM12 13.197a1.199 1.199 0 0 1 0-2.395 1.199 1.199 0 0 1 0 2.395ZM16.48 13.197a1.199 1.199 0 0 1 0-2.395 1.199 1.199 0 0 1 0 2.395Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MoreCircleTwotone
