import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDownSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 16.086V7.914M15.752 12.322S13.224 16.086 12 16.086c-1.224 0-3.748-3.764-3.748-3.764" />
      <Path
        clipRule="evenodd"
        d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z"
      />
    </G>
  </Svg>
)
export default ArrowDownSquareCurved
