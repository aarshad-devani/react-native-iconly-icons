import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
      fill={props.fillColor}
    />
    <Path
      d="M15.573 15.814a.756.756 0 0 1-.384-.105l-3.926-2.342a.754.754 0 0 1-.365-.645V7.675a.75.75 0 0 1 1.5 0v4.621l3.56 2.123a.752.752 0 0 1-.385 1.395"
      fill={props.fillColor}
    />
  </Svg>
)
export default TimeSquareBulk
