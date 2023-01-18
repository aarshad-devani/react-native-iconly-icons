import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SwapLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M16.84 20.164V6.546M20.917 16.068l-4.078 4.097-4.077-4.097M6.911 3.833V17.45M2.833 7.929l4.078-4.097L10.99 7.93"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SwapLight
