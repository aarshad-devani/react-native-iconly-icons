import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PlayCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z" />
      <Path d="M15.416 11.855c0-.904-4.584-3.796-5.104-3.276-.52.52-.57 5.983 0 6.552.57.571 5.104-2.372 5.104-3.276Z" />
    </G>
  </Svg>
)
export default PlayCurved
