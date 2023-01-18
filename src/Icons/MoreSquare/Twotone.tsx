import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreSquareTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M16.335 2.75h-8.67c-3.02 0-4.914 2.139-4.914 5.166v8.168c0 3.027 1.884 5.166 4.915 5.166h8.668c3.03 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166Z"
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
export default MoreSquareTwotone
