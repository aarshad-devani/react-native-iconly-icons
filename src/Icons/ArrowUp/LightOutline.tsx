import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUpLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={props.fillColor}>
      <Path d="M11.726 20a.75.75 0 0 1-.744-.648l-.006-.102v-15a.75.75 0 0 1 1.493-.102l.007.102v15a.75.75 0 0 1-.75.75Z" />
      <Path d="M6.233 10.829a.75.75 0 0 1-1.136-.974l.073-.084 6.024-6.05a.75.75 0 0 1 .978-.073l.085.073 6.025 6.05a.75.75 0 0 1-.98 1.13l-.083-.072-5.494-5.516-5.492 5.516Z" />
    </G>
  </Svg>
)
export default ArrowUpLightOutline
