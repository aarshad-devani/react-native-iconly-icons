import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.737 2.762H8.084c-2.06 0-3.834 1.669-3.834 3.729v10.713c0 2.176 1.659 3.91 3.834 3.91h7.989c2.06 0 3.729-1.85 3.729-3.91V8.038l-5.065-5.276Z"
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
      d="M14.284 15.558H8.887M12.242 10.605H8.886"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PaperTwotone
