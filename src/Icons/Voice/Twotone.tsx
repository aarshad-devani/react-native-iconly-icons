import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VoiceTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.464 10.932a.75.75 0 0 0-1.5 0 8.154 8.154 0 0 0 7.404 8.12v2.095a.75.75 0 0 0 1.5 0v-2.095a8.154 8.154 0 0 0 7.404-8.12.75.75 0 0 0-1.5 0 6.653 6.653 0 0 1-6.654 6.654 6.653 6.653 0 0 1-6.654-6.654Z"
      fill={props.fillColor}
    />
    <Path
      clipRule="evenodd"
      d="M12.245 14.584h-.253a3.66 3.66 0 0 1-3.66-3.66v-4.55a3.66 3.66 0 0 1 3.66-3.66h.253a3.66 3.66 0 0 1 3.66 3.66v4.55a3.66 3.66 0 0 1-3.66 3.66Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VoiceTwotone
