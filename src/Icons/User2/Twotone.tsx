import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const User2Twotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M9.592 15.207c3.688 0 6.841.559 6.841 2.792 0 2.233-3.131 2.808-6.841 2.808-3.69 0-6.842-.554-6.842-2.788s3.13-2.812 6.842-2.812Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M9.592 12.02a4.386 4.386 0 1 1 4.385-4.385 4.37 4.37 0 0 1-4.354 4.385h-.031Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M16.483 10.882A3.301 3.301 0 0 0 19.32 7.62a3.3 3.3 0 0 0-2.762-3.256"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.596 14.732c1.55.231 2.634.775 2.634 1.895 0 .771-.51 1.271-1.335 1.584"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default User2Twotone
