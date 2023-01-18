import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeftSquareTwotone = (props: SvgProps & { fillColor: string }) => (
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
        d="M2.75 7.666v8.669c0 3.02 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.885 5.166-4.915V7.666c0-3.03-2.139-4.916-5.166-4.916H7.916c-3.027 0-5.166 1.886-5.166 4.916Z"
      />
      <Path d="M7.914 12h8.172M11.678 15.748 7.914 12l3.764-3.748" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeftSquareTwotone
