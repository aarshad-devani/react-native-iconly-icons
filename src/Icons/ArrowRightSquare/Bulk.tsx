import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRightSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M7.916 22h8.168C19.623 22 22 19.724 22 16.335v-8.67C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666v8.669C2 19.724 4.378 22 7.916 22Z"
      />
      <Path d="m12.855 16.28 3.765-3.749a.773.773 0 0 0 0-1.064L12.855 7.72a.75.75 0 0 0-1.059 1.064l2.478 2.467H7.918a.75.75 0 1 0 0 1.5h6.356l-2.477 2.466a.749.749 0 0 0-.003 1.061.751.751 0 0 0 1.061.002Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowRightSquareBulk
