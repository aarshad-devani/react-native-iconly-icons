import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreSquareLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M16.334 2.75H7.665c-3.02 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.884 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.94 12.013h.008M11.93 12.013h.01M7.922 12.013h.009"
      stroke={props.fillColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default MoreSquareLight
