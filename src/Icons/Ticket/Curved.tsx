import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TicketCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M13.36 3.6v2.655M13.36 17.544v2.22M13.36 14.544V9.255" />
      <Path
        clipRule="evenodd"
        d="M21.5 14.05c-2.69 0-2.69-4.101 0-4.101 0-4.753 0-6.449-9.5-6.449S2.5 5.196 2.5 9.949c2.69 0 2.69 4.101 0 4.101 0 4.754 0 6.45 9.5 6.45s9.5-1.696 9.5-6.45Z"
      />
    </G>
  </Svg>
)
export default TicketCurved
