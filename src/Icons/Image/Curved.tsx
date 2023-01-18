import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ImageCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.07 16.459s.813-1.637 1.995-1.637c1.182 0 1.786 1.375 3.096 1.375 1.309 0 2.778-3.448 4.262-3.448 1.482 0 2.548 2.39 2.548 2.39" />
      <Path
        clipRule="evenodd"
        d="M10.14 9.105a1.558 1.558 0 1 1-3.117 0 1.558 1.558 0 0 1 3.116 0Z"
      />
      <Path
        clipRule="evenodd"
        d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z"
      />
    </G>
  </Svg>
)
export default ImageCurved
