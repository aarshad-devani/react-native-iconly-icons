import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperNegativeLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.737 2.762H8.085A3.819 3.819 0 0 0 4.25 6.49V17.34A3.714 3.714 0 0 0 7.9 21.117c.06 0 .123 0 .185-.002h7.988a3.769 3.769 0 0 0 3.73-3.775v-9.3l-5.066-5.278Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.473 2.75v2.91a2.575 2.575 0 0 0 2.57 2.574h2.753M14.293 13.747h-4.9"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PaperNegativeLight
