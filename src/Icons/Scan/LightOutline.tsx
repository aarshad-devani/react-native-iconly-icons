import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ScanLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M22.75 13.955h-21a.75.75 0 0 1 0-1.5h21a.75.75 0 0 1 0 1.5M20.88 9.745a.75.75 0 0 1-.75-.75V7.481A2.986 2.986 0 0 0 17.147 4.5h-1.205a.75.75 0 0 1 0-1.5h1.205a4.488 4.488 0 0 1 4.483 4.481v1.514a.75.75 0 0 1-.75.75M3.62 9.745a.75.75 0 0 1-.75-.75V7.481A4.488 4.488 0 0 1 7.353 3H8.59a.75.75 0 0 1 0 1.5H7.353A2.986 2.986 0 0 0 4.37 7.481v1.514a.75.75 0 0 1-.75.75" />
      <Path d="M17.147 21.76h-1.205a.75.75 0 0 1 0-1.5h1.205a2.986 2.986 0 0 0 2.983-2.981v-4.075a.75.75 0 0 1 1.5 0v4.075a4.488 4.488 0 0 1-4.483 4.482M8.589 21.76H7.353A4.488 4.488 0 0 1 2.87 17.28v-4.075a.75.75 0 0 1 1.5 0v4.075a2.986 2.986 0 0 0 2.983 2.982h1.236a.75.75 0 0 1 0 1.5" />
    </G>
  </Svg>
)
export default ScanLightOutline
