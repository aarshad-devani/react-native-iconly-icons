import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperNegativeTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.736 2.762H8.084c-2.06 0-3.834 1.669-3.834 3.729V17.34c0 2.176 1.658 3.775 3.834 3.775h7.989c2.06 0 3.73-1.715 3.73-3.775V8.038l-5.067-5.276Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.474 2.75v2.909a2.575 2.575 0 0 0 2.569 2.575c1.316.003 2.663.004 2.754-.002"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M14.294 13.747h-4.9"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PaperNegativeTwotone
