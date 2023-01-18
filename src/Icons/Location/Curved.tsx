import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const LocationCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14.51 10.71a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
      <Path d="M12 21C9.1 21 4.5 15.959 4.5 10.599 4.5 6.402 7.857 3 12 3c4.142 0 7.5 3.402 7.5 7.599C19.5 15.959 14.899 21 12 21Z" />
    </G>
  </Svg>
)
export default LocationCurved
