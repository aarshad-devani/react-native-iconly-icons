import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowRightCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M10.559 16.22a.75.75 0 0 1-.529-1.281L12.982 12 10.03 9.062a.751.751 0 0 1 1.058-1.063l3.486 3.47a.75.75 0 0 1 0 1.064l-3.486 3.47a.747.747 0 0 1-.53.219" />
    </G>
  </Svg>
)
export default ArrowRightCircleLightOutline
