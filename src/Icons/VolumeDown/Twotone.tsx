import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VolumeDownTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M4.002 12c-.003 1.23-.058 2.907.703 3.534.71.585 1.209.434 2.504.53 1.297.095 4.033 3.906 6.142 2.7 1.088-.855 1.17-2.649 1.17-6.764s-.082-5.909-1.17-6.764C11.242 4.029 8.506 7.84 7.21 7.937c-1.295.095-1.794-.055-2.504.53-.76.626-.706 2.303-.703 3.533Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M18.581 8.314a7.399 7.399 0 0 1 0 7.372"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VolumeDownTwotone
