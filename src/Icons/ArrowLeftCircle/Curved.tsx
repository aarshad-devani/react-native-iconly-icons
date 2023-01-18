import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeftCircleCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M12 2.75c-6.937 0-9.25 2.313-9.25 9.25 0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25Z"
      />
      <Path d="M13.442 8.529S9.956 10.92 9.956 12s3.486 3.47 3.486 3.47" />
    </G>
  </Svg>
)
export default ArrowLeftCircleCurved
