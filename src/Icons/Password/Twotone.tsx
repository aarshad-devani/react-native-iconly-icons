import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PasswordTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M16.334 2.75H7.665c-3.02 0-4.915 2.139-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.669c3.03 0 4.916-2.139 4.916-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M10.693 12a1.852 1.852 0 1 1-3.705 0 1.852 1.852 0 0 1 3.705 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.692 12h6.318v1.852M14.182 13.851V12"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PasswordTwotone
