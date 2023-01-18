import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDownCircleCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z"
      />
      <Path d="M8.529 10.558S10.92 14.044 12 14.044s3.47-3.486 3.47-3.486" />
    </G>
  </Svg>
)
export default ArrowDownCircleCurved
