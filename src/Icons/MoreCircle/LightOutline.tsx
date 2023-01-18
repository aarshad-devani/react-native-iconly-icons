import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const MoreCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M15.948 13.014a1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1h.01a1 1 0 1 1 0 2M11.939 13.014a1.003 1.003 0 0 1-1.004-1c0-.553.442-1 .995-1h.009a1 1 0 1 1 0 2M7.93 13.014a1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .996-1h.009a1 1 0 1 1 0 2" />
    </G>
  </Svg>
)
export default MoreCircleLightOutline
