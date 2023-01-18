import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TimeCircleCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
      />
      <Path d="m16.19 12.767-4.53-.074V7.846" />
    </G>
  </Svg>
)
export default TimeCircleCurved
