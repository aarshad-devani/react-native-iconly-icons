import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownCircleLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M2.75 12a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.53 10.558 12 14.044l3.471-3.486"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowDownCircleLight
