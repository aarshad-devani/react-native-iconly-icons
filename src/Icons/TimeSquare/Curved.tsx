import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TimeSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z"
      />
      <Path d="m15.39 14.018-3.391-2.023V7.634" />
    </G>
  </Svg>
)
export default TimeSquareCurved
