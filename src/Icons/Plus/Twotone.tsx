import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlusTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 8.327a.75.75 0 0 0-1.5 0v2.913H8.333a.75.75 0 0 0 0 1.5h2.917v2.913a.75.75 0 0 0 1.5 0V12.74h2.917a.75.75 0 0 0 0-1.5H12.75V8.327Z"
      fill={props.fillColor}
    />
    <Path
      clipRule="evenodd"
      d="M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PlusTwotone
