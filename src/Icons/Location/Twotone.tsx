import React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const LocationTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M4.239 10.392a7.678 7.678 0 1 1 15.357.052v.087c-.053 2.756-1.592 5.304-3.479 7.295a20.187 20.187 0 0 1-3.591 2.957.93.93 0 0 1-1.217 0 19.817 19.817 0 0 1-5.053-4.73 9.826 9.826 0 0 1-2.017-5.635v-.026Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      opacity={0.4}
      cx={11.917}
      cy={10.54}
      r={2.461}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default LocationTwotone
