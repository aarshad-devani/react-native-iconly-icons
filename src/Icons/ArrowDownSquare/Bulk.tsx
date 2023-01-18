import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M2 7.916v8.168C2 19.623 4.276 22 7.665 22h8.67C19.724 22 22 19.623 22 16.084V7.916C22 4.378 19.723 2 16.334 2H7.665C4.276 2 2 4.378 2 7.916"
      />
      <Path d="m7.72 12.855 3.749 3.765a.773.773 0 0 0 1.064 0l3.748-3.765a.75.75 0 0 0-1.064-1.059l-2.467 2.478V7.918a.75.75 0 1 0-1.5 0v6.356l-2.466-2.477a.749.749 0 0 0-1.061-.003.751.751 0 0 0-.002 1.061" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowDownSquareBulk
