import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ScanTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M22.631 13.014H1.5"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M20.75 8.778V6.825A3.335 3.335 0 0 0 17.425 3.5h-1.644M3.382 8.778V6.82a3.32 3.32 0 0 1 3.316-3.32l1.68-.001"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.75 13.014v4.531a3.335 3.335 0 0 1-3.325 3.325h-1.644M3.382 13.014v4.535a3.32 3.32 0 0 0 3.316 3.32l1.68.001"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ScanTwotone
