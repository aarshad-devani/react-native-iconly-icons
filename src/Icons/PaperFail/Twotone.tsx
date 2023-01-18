import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperFailTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.736 2.762H7.98a3.729 3.729 0 0 0-3.73 3.729V17.34c0 2.176 1.765 3.775 3.94 3.775h7.884c2.06 0 3.729-1.715 3.729-3.775V8.038l-5.066-5.276Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.474 2.75v2.909a2.574 2.574 0 0 0 2.568 2.575c1.317.003 2.664.004 2.755-.002"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.64 10.651a.75.75 0 1 0-1.06 1.061l1.203 1.203-1.203 1.202a.75.75 0 0 0 1.06 1.061l1.204-1.203 1.202 1.203a.75.75 0 0 0 1.06-1.06l-1.202-1.203 1.203-1.203a.75.75 0 0 0-1.06-1.06l-1.204 1.202-1.202-1.203Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperFailTwotone
