import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUp3Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M7.217 12.238h4.066v8.028c0 .405.321.734.717.734a.726.726 0 0 0 .717-.734v-8.028h4.066a.714.714 0 0 0 .628-.38.748.748 0 0 0-.021-.744l-4.783-7.77A.713.713 0 0 0 12 3a.713.713 0 0 0-.607.344L8.417 8.179a.744.744 0 0 0 .224 1.012.709.709 0 0 0 .99-.231L12 5.113l3.484 5.657H7.217a.726.726 0 0 0-.717.734c0 .405.321.734.717.734"
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
export default ArrowUp3Broken
