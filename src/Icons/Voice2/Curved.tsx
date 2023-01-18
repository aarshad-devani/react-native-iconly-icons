import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Voice2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.604 13.832a5.386 5.386 0 0 0 10.772 0M17.376 10.74V8.598a5.385 5.385 0 1 0-10.772 0v2.142M11.99 21.263v-2.045M5.212 13.832h13.556M10.498 10.452h2.985M12.491 7.682h-1.003" />
    </G>
  </Svg>
)
export default Voice2Curved
