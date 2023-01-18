import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GraphTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M17.278 13.89c.675 0 1.241.556 1.138 1.222-.605 3.92-3.961 6.83-8.009 6.83A8.107 8.107 0 0 1 2.3 13.837c0-3.688 2.802-7.124 5.957-7.9.678-.168 1.373.309 1.373 1.007 0 4.728.158 5.951 1.056 6.617.898.665 1.954.33 6.592.33Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M21.693 9.952c.053-3.038-3.678-7.935-8.226-7.85a.679.679 0 0 0-.652.653c-.115 2.498.04 5.735.126 7.202a.89.89 0 0 0 .841.842c1.508.086 4.863.204 7.325-.168a.694.694 0 0 0 .586-.68Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default GraphTwotone
