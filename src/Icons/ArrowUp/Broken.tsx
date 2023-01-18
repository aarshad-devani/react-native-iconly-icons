import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.176 20.284c.051.404.4.716.824.716.458 0 .83-.366.83-.818V5.799l5.251 5.196.085.074a.84.84 0 0 0 1.09-.072.81.81 0 0 0 .002-1.156l-6.67-6.6-.084-.073a.836.836 0 0 0-.82-.106.817.817 0 0 0-.514.756v16.364l.006.102Zm-6.432-9.286a.84.84 0 0 0 1.175-.003l3.679-3.64.074-.084a.807.807 0 0 0-.077-1.072.835.835 0 0 0-1.174.002L4.74 9.84l-.073.083a.81.81 0 0 0 .076 1.074Z"
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
export default ArrowUpBroken
