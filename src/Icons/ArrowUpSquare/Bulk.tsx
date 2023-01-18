import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M22 16.084V7.916C22 4.377 19.724 2 16.335 2h-8.67C4.276 2 2 4.377 2 7.916v8.168C2 19.622 4.277 22 7.666 22h8.669C19.724 22 22 19.622 22 16.084"
      />
      <Path d="M16.28 11.145 12.53 7.38a.773.773 0 0 0-1.064 0L7.72 11.145a.75.75 0 0 0 1.064 1.059l2.467-2.477v6.354a.75.75 0 1 0 1.5 0V9.727l2.466 2.476a.749.749 0 0 0 1.061.003.751.751 0 0 0 .002-1.061" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowUpSquareBulk
