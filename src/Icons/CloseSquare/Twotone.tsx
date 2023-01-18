import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CloseSquareTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.132 9.063a.75.75 0 0 0-1.061 1.06l1.867 1.868-1.865 1.866a.75.75 0 0 0 1.06 1.06L12 13.052l1.868 1.868a.75.75 0 1 0 1.06-1.06L13.06 11.99l1.866-1.866a.75.75 0 1 0-1.06-1.06l-1.867 1.866-1.867-1.868Z"
      fill={props.fillColor}
    />
    <Path
      clipRule="evenodd"
      d="M16.334 2.75H7.665c-3.02 0-4.915 2.139-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.669c3.03 0 4.916-2.139 4.916-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CloseSquareTwotone
