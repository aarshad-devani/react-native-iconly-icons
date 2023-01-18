import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UnlockTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M16.424 5.562A4.554 4.554 0 0 0 12.122 2.5a4.551 4.551 0 0 0-4.57 4.531v2.167"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M15.933 21H8.292A3.793 3.793 0 0 1 4.5 17.207V12.92a3.793 3.793 0 0 1 3.792-3.793h7.641a3.793 3.793 0 0 1 3.792 3.793v4.288A3.793 3.793 0 0 1 15.933 21Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.113 13.953v2.222"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default UnlockTwotone
