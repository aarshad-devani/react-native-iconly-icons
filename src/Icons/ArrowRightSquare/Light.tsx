import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRightSquareLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M21.25 16.334V7.665c0-3.02-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.885-5.166 4.915v8.67c0 3.03 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.886 5.166-4.916Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.086 12H7.914M12.322 8.252 16.086 12l-3.764 3.748"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowRightSquareLight
