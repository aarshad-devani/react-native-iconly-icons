import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeftCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M13.442 16.22a.747.747 0 0 1-.529-.218l-3.487-3.47a.751.751 0 0 1 0-1.063l3.487-3.471a.749.749 0 1 1 1.058 1.063L11.02 12l2.952 2.94a.749.749 0 0 1-.529 1.28" />
    </G>
  </Svg>
)
export default ArrowLeftCircleLightOutline
