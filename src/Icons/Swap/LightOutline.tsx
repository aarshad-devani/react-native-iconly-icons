import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SwapLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={props.fillColor}>
      <Path d="M16.84 5.796a.75.75 0 0 1 .743.649l.007.101v13.618a.75.75 0 0 1-1.494.102l-.006-.102V6.546a.75.75 0 0 1 .75-.75Z" />
      <Path d="M20.386 15.539a.75.75 0 0 1 1.135.974l-.072.084-4.078 4.097a.75.75 0 0 1-.979.073l-.084-.073-4.078-4.097a.75.75 0 0 1 .98-1.13l.083.072L16.84 19.1l3.547-3.562ZM6.911 3.083a.75.75 0 0 1 .743.648l.007.102V17.45a.75.75 0 0 1-1.493.101l-.007-.101V3.833a.75.75 0 0 1 .75-.75Z" />
      <Path d="M6.38 3.303a.75.75 0 0 1 .979-.073l.084.073L11.52 7.4a.75.75 0 0 1-.98 1.13l-.084-.072-3.546-3.563-3.546 3.563a.75.75 0 0 1-.976.075l-.085-.072a.75.75 0 0 1-.074-.977l.072-.084L6.38 3.303Z" />
    </G>
  </Svg>
)
export default SwapLightOutline
