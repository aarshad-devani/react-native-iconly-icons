import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeftSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M16.084 2H7.916C4.377 2 2 4.276 2 7.665v8.67C2 19.724 4.377 22 7.916 22h8.168C19.622 22 22 19.723 22 16.334V7.665C22 4.276 19.622 2 16.084 2Z"
      />
      <Path d="M11.145 7.72 7.38 11.47a.773.773 0 0 0 0 1.064l3.765 3.748a.75.75 0 0 0 1.059-1.064L9.726 12.75h6.354a.75.75 0 1 0 0-1.5H9.727l2.476-2.466a.749.749 0 0 0 .003-1.061.751.751 0 0 0-1.061-.002Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeftSquareBulk
