import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GameTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M8.848 12.314v3.745M10.76 14.187H6.937M15.366 12.428h-.107M17.18 16.003h-.107"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M8.072 2c0 .74.613 1.34 1.368 1.34h1.057c1.165.005 2.11.93 2.115 2.073v.675"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.428 21.963c-3.005.05-5.955.049-8.855 0C4.353 21.963 2 19.666 2 16.51v-4.65c0-3.154 2.354-5.45 5.573-5.45 2.916-.05 5.868-.05 8.855 0 3.22 0 5.572 2.297 5.572 5.45v4.65c0 3.155-2.352 5.452-5.572 5.452Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default GameTwotone
