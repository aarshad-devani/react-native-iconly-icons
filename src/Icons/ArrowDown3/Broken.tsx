import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDown3Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M16.783 11.762h-4.066V3.734A.726.726 0 0 0 12 3a.726.726 0 0 0-.717.734v8.028H7.217a.714.714 0 0 0-.628.38.748.748 0 0 0 .021.744l4.783 7.77c.132.215.36.344.607.344s.475-.13.607-.344l2.976-4.835a.744.744 0 0 0-.224-1.012.709.709 0 0 0-.99.231L12 18.887 8.516 13.23h8.267a.726.726 0 0 0 .717-.734.726.726 0 0 0-.717-.734Z"
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
export default ArrowDown3Broken
