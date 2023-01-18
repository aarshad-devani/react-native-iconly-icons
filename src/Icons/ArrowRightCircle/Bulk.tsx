import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRightCircleBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fillColor}>
      <Path
        opacity={0.4}
        d="M12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10C6.486 22 2 17.514 2 12S6.486 2 12 2Z"
      />
      <Path d="M10.557 7.78c.191 0 .383.072.53.218l3.486 3.47a.751.751 0 0 1 0 1.063l-3.487 3.472a.749.749 0 1 1-1.058-1.063L12.982 12l-2.954-2.94a.75.75 0 0 1 .53-1.28Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowRightCircleBulk
