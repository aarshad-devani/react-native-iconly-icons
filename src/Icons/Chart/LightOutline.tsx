import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ChartLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.121 17.563a.75.75 0 0 1-.75-.75v-6.86a.75.75 0 0 1 1.5 0v6.86a.75.75 0 0 1-.75.75M11.788 17.561a.75.75 0 0 1-.75-.75V6.668a.75.75 0 0 1 1.5 0v10.143a.75.75 0 0 1-.75.75M16.378 17.561a.75.75 0 0 1-.75-.75v-3.233a.75.75 0 0 1 1.5 0v3.233a.75.75 0 0 1-.75.75" />
      <Path d="M7.064 2.5C4.292 2.5 2.5 4.397 2.5 7.335v8.83C2.5 19.103 4.292 21 7.064 21h9.372C19.209 21 21 19.103 21 16.165v-8.83C21 4.397 19.209 2.5 16.436 2.5H7.064Zm9.372 20H7.064C3.437 22.5 1 19.954 1 16.165v-8.83C1 3.546 3.437 1 7.064 1h9.372C20.063 1 22.5 3.546 22.5 7.335v8.83c0 3.789-2.437 6.335-6.064 6.335Z" />
    </G>
  </Svg>
)
export default ChartLightOutline
