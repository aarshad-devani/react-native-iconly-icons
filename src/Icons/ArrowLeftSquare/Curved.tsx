import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeftSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7.914 12h8.172M11.678 15.752S7.914 13.224 7.914 12c0-1.224 3.764-3.748 3.764-3.748" />
      <Path
        clipRule="evenodd"
        d="M12 2.75c-6.937 0-9.25 2.313-9.25 9.25 0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25Z"
      />
    </G>
  </Svg>
)
export default ArrowLeftSquareCurved
