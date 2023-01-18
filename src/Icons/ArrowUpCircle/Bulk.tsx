import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10c0 5.514-4.486 10-10 10S2 17.514 2 12Z"
      />
      <Path d="M7.78 13.443c0-.191.072-.383.218-.53l3.47-3.486a.751.751 0 0 1 1.063 0l3.472 3.487a.749.749 0 1 1-1.063 1.058L12 11.018l-2.94 2.954a.75.75 0 0 1-1.28-.53Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowUpCircleBulk
