import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CallSilentTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M6.585 14.205C.154 6.918 3.37 4.74 3.655 4.385c3.068-3.112 3.544-1.695 5.955.752 2.03 2.071-.602 3.058.477 5.516"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.49 13.382c3.28 2.694 4.206-1.159 6.53 1.202 2.396 2.447 3.774 2.94.735 6.043-.357.31-2.66 3.842-10.555-3.886M4.5 21.5l15-16"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CallSilentTwotone
