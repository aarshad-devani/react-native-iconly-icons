import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M22 12c0 5.515-4.486 10-10 10S2 17.515 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10Z"
      />
      <Path d="M16.22 10.557a.747.747 0 0 1-.218.53l-3.47 3.486a.751.751 0 0 1-1.063 0l-3.472-3.487a.749.749 0 1 1 1.063-1.058L12 12.982l2.94-2.954a.75.75 0 0 1 1.28.53Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowDownCircleBulk
