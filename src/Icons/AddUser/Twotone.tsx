import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AddUserTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M9.877 15.207c-3.844 0-7.127.58-7.127 2.909 0 2.328 3.263 2.93 7.127 2.93 3.845 0 7.126-.582 7.126-2.91 0-2.326-3.261-2.93-7.126-2.93Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M9.877 11.886A4.568 4.568 0 1 0 5.31 7.318a4.551 4.551 0 0 0 4.536 4.568h.03Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.204 8.67v4.01M21.25 10.674h-4.09"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default AddUserTwotone
