import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.988 2.768c0-.422.343-.765.765-.765C19.608 2 22 4.392 22 8.244v7.503C22 19.608 19.608 22 15.756 22h-7.5C4.393 22 2 19.608 2 15.747v-7.5C2 4.41 4.393 2 8.253 2h2.569c.417 0 .756.339.756.756v.009h-.017a.765.765 0 0 1-.764.765H8.253C5.2 3.53 3.53 5.2 3.53 8.244v7.5c0 3.046 1.68 4.726 4.723 4.726h7.5c3.034 0 4.714-1.68 4.714-4.723v-7.5c0-3.043-1.68-4.714-4.714-4.714a.766.766 0 0 1-.765-.765ZM11.25 7.914v6.356l-2.467-2.477a.749.749 0 1 0-1.062 1.058l3.748 3.764v.001a.742.742 0 0 0 .529.22H12a.062.062 0 0 0 .019-.003l.016-.004a.754.754 0 0 0 .25-.05.782.782 0 0 0 .232-.152.742.742 0 0 0 .233-.54V7.913a.75.75 0 0 0-1.5 0ZM15 14.136l1.279-1.284a.748.748 0 0 0-.002-1.062.749.749 0 0 0-1.06.003l-1.278 1.284A.751.751 0 0 0 15 14.136Z"
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
export default ArrowDownSquareBroken
