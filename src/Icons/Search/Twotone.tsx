import React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const SearchTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle
      cx={11.767}
      cy={11.766}
      r={8.989}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M18.018 18.485 21.542 22"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SearchTwotone
