import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUp2Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.322 16.33a.814.814 0 0 1-1.08-.074.847.847 0 0 1-.001-1.184l7.176-7.325.084-.076a.81.81 0 0 1 1.08.073.846.846 0 0 1 .002 1.184l-7.177 7.326-.084.075Zm14.435-.074a.814.814 0 0 1-1.164-.002l-4.765-4.866-.073-.086a.847.847 0 0 1 .077-1.097.813.813 0 0 1 1.163.002l4.765 4.865.074.086a.847.847 0 0 1-.077 1.098Z"
        fill={props.fillColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowUp2Broken
