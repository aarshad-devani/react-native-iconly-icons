import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeCircleBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C6.48 22 2 17.53 2 12 2 6.48 6.48 2 12 2c5.53 0 10 4.48 10 10 0 5.53-4.47 10-10 10Zm3.19-6.29a.742.742 0 0 0 1.03-.26c.21-.35.1-.81-.26-1.03L12.4 12.3V7.68a.749.749 0 1 0-1.5 0v5.05c0 .26.14.5.37.64l3.92 2.34Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default TimeCircleBold
