import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BagLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M16.514 21.5H8.166c-3.067 0-5.419-1.108-4.75-5.565l.777-6.041c.412-2.225 1.83-3.076 3.076-3.076h10.178c1.263 0 2.6.915 3.076 3.076l.778 6.04c.567 3.955-1.721 5.566-4.787 5.566Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.651 6.598a4.32 4.32 0 0 0-4.32-4.32v0a4.32 4.32 0 0 0-4.34 4.32h0M15.296 11.102h-.045M9.466 11.102H9.42"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default BagLight
