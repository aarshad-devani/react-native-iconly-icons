import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CallMissedTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      opacity={0.4}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m21.315 3.75-6 6M15.315 3.75l6 6" />
    </G>
    <Path
      clipRule="evenodd"
      d="M11.031 12.472c3.99 3.988 4.894-.625 7.434 1.913 2.449 2.448 3.857 2.938.754 6.04-.389.312-2.858 4.07-11.535-4.605C-.993 7.144 2.762 4.672 3.074 4.284c3.11-3.11 3.593-1.695 6.041.753 2.54 2.54-2.072 3.447 1.916 7.435Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CallMissedTwotone
