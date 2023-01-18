import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperPlusTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49V17.34c0 2.176 1.658 3.775 3.834 3.775h7.988c2.06 0 3.73-1.715 3.73-3.775V8.038l-5.066-5.276Z"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.594 10.464a.75.75 0 1 0-1.5 0v1.7h-1.7a.75.75 0 1 0 0 1.5h1.7v1.701a.75.75 0 0 0 1.5 0v-1.7h1.7a.75.75 0 0 0 0-1.5h-1.7v-1.7Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperPlusTwotone
