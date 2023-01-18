import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12.274 19.75v-15M18.299 13.7l-6.024 6.05L6.25 13.7"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowDownLight
