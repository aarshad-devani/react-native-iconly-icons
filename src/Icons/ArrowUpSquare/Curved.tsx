import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUpSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 7.914v8.172M8.248 11.678S10.776 7.914 12 7.914c1.224 0 3.748 3.764 3.748 3.764" />
      <Path
        clipRule="evenodd"
        d="M21.25 12c0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25 0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25Z"
      />
    </G>
  </Svg>
)
export default ArrowUpSquareCurved
