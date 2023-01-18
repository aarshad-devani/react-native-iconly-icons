import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUpCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M15.472 14.192a.743.743 0 0 1-.531-.22L12 11.017l-2.94 2.953a.75.75 0 0 1-1.062-1.058l3.47-3.487a.772.772 0 0 1 1.064 0l3.47 3.487a.75.75 0 0 1-.53 1.28" />
    </G>
  </Svg>
)
export default ArrowUpCircleLightOutline
