import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowLeftSquareLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M2.75 7.666v8.669c0 3.02 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.885 5.166-4.915v-8.67c0-3.03-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.886-5.166 4.916Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.914 12h8.172M11.678 15.748 7.914 12l3.764-3.748"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowLeftSquareLight
