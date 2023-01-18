import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const DiscoveryCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z" />
      <Path d="m8.698 15.302 1.574-5.03 5.03-1.574-1.574 5.03-5.03 1.574Z" />
    </G>
  </Svg>
)
export default DiscoveryCurved
