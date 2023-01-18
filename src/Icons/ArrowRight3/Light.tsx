import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowRight3Light = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12.7 11.749H3.75"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m12.7 16.75 7.937-5.001L12.7 6.748V16.75Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowRight3Light
