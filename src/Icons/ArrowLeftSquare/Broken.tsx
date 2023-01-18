import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeftSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.232 14.988c.422 0 .765.343.765.765C22 19.608 19.607 22 15.756 22H8.253C4.392 22 2 19.608 2 15.756v-7.5C2 4.393 4.392 2 8.253 2h7.5C19.59 2 22 4.393 22 8.253v2.569a.757.757 0 0 1-.756.756h-.01v-.017a.765.765 0 0 1-.764-.764V8.253c0-3.053-1.67-4.723-4.714-4.723h-7.5C5.21 3.53 3.53 5.21 3.53 8.253v7.5c0 3.034 1.68 4.714 4.723 4.714h7.5c3.043 0 4.714-1.68 4.714-4.714 0-.422.343-.765.765-.765Zm-5.146-3.738H9.73l2.477-2.467a.749.749 0 1 0-1.058-1.062L7.385 11.47l-.001.001a.742.742 0 0 0-.22.529V12c0 .007.001.013.003.019l.004.016c.004.085.018.17.05.251a.782.782 0 0 0 .145.22l.007.01a.742.742 0 0 0 .54.233h8.173a.75.75 0 0 0 0-1.499Zm-6.222 3.751 1.284 1.278a.748.748 0 0 0 1.062-.002.749.749 0 0 0-.003-1.06l-1.284-1.278a.751.751 0 0 0-1.059 1.062Z"
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
export default ArrowLeftSquareBroken
