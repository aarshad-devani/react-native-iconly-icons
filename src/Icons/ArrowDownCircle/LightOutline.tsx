import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDownCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M12 14.794a.746.746 0 0 1-.531-.221l-3.47-3.486a.75.75 0 1 1 1.062-1.06L12 12.983l2.94-2.954a.75.75 0 1 1 1.063 1.059l-3.472 3.486a.746.746 0 0 1-.531.22" />
    </G>
  </Svg>
)
export default ArrowDownCircleLightOutline
