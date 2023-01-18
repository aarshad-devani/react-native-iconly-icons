import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SendTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="m15.712 7.727-5.82 5.82"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.891 13.548 3.076 9.381c-.893-.546-.712-1.893.294-2.184l16.09-4.648a1.203 1.203 0 0 1 1.487 1.501l-4.774 15.964c-.299 1-1.64 1.172-2.182.28l-4.1-6.746"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SendTwotone
