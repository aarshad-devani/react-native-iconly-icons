import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const MoreSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G stroke={props.fillColor} strokeLinecap="round" strokeLinejoin="round">
      <Path
        clipRule="evenodd"
        d="M2.75 12c0-6.937 2.313-9.25 9.25-9.25 6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25-6.937 0-9.25-2.313-9.25-9.25Z"
        strokeWidth={1.5}
      />
      <Path d="M15.993 12h.01M11.995 12h.009M7.995 12h.01" strokeWidth={2} />
    </G>
  </Svg>
)
export default MoreSquareCurved
