import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUpCircleLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M21.25 12a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.47 13.442 12 9.956l-3.471 3.486"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUpCircleLight
