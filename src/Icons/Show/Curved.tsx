import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ShowCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15.164 12.052a3.162 3.162 0 1 1-6.325 0 3.162 3.162 0 0 1 6.325 0Z" />
      <Path d="M2.75 12.052c0 3.28 4.142 7.302 9.252 7.302s9.252-4.019 9.252-7.302c0-3.283-4.143-7.302-9.252-7.302-5.11 0-9.252 4.022-9.252 7.302Z" />
    </G>
  </Svg>
)
export default ShowCurved
