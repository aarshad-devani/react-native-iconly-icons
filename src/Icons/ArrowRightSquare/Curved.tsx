import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowRightSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.086 12H7.914M12.322 8.248s3.764 2.528 3.764 3.752c0 1.224-3.764 3.748-3.764 3.748" />
      <Path
        clipRule="evenodd"
        d="M12 21.25c6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25 0 6.937 2.313 9.25 9.25 9.25Z"
      />
    </G>
  </Svg>
)
export default ArrowRightSquareCurved
