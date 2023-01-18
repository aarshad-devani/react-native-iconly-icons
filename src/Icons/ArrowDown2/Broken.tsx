import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDown2Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.242 7.744a.814.814 0 0 1 1.164.002l7.177 7.326a.846.846 0 0 1-.003 1.184.811.811 0 0 1-1.163-.002L4.241 8.926a.847.847 0 0 1 0-1.183Zm14.35.002a.814.814 0 0 1 1.165-.002.847.847 0 0 1 .003 1.184l-4.765 4.865a.813.813 0 0 1-1.163.002.847.847 0 0 1-.004-1.183l4.765-4.866Z"
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
export default ArrowDown2Broken
