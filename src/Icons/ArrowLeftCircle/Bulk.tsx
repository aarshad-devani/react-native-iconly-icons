import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeftCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M12 22C6.485 22 2 17.514 2 12S6.485 2 12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10"
      />
      <Path d="M13.443 16.22a.747.747 0 0 1-.53-.218l-3.486-3.47a.751.751 0 0 1 0-1.063l3.487-3.472a.749.749 0 1 1 1.058 1.063L11.018 12l2.954 2.94a.75.75 0 0 1-.53 1.28" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeftCircleBulk
