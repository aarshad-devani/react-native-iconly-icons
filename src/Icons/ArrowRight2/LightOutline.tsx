import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRight2LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.97 19.53a.75.75 0 0 1-.073-.976l.073-.084L14.439 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073 7 7a.75.75 0 0 1 .073.976l-.073.084-7 7a.75.75 0 0 1-1.06 0Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowRight2LightOutline
