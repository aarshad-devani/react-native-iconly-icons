import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownSquareLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M7.666 21.25h8.669c3.02 0 4.915-2.139 4.915-5.166V7.916c0-3.027-1.885-5.166-4.915-5.166H7.666c-3.03 0-4.916 2.139-4.916 5.166v8.168c0 3.027 1.886 5.166 4.916 5.166Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16.086V7.914M15.748 12.322 12 16.086l-3.748-3.764"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowDownSquareLight
