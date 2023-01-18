import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownCircleTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        opacity={0.4}
        clipRule="evenodd"
        d="M2.75 12a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0Z"
      />
      <Path d="M8.53 10.558 12 14.044l3.471-3.486" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowDownCircleTwotone
