import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const DiscountCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G stroke={props.fillColor} strokeLinecap="round" strokeLinejoin="round">
      <Path
        clipRule="evenodd"
        d="M2.75 12c0-6.937 2.313-9.25 9.25-9.25 6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25-6.937 0-9.25-2.313-9.25-9.25Z"
        strokeWidth={1.5}
      />
      <Path d="m9.43 14.57 5.14-5.14" strokeWidth={1.5} />
      <Path d="M14.495 14.5h.01M9.495 9.5h.01" strokeWidth={2} />
    </G>
  </Svg>
)
export default DiscountCurved
