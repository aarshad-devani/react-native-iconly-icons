import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LocationLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.5 10.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12 21c-1.199 0-7.5-5.102-7.5-10.437C4.5 6.387 7.857 3 12 3c4.142 0 7.5 3.387 7.5 7.563C19.5 15.898 13.198 21 12 21Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default LocationLight
