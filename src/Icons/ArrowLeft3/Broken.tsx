import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeft3Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12.238 16.783v-4.066h8.028A.726.726 0 0 0 21 12a.726.726 0 0 0-.734-.717h-8.028V7.217a.714.714 0 0 0-.38-.628.748.748 0 0 0-.744.021l-7.77 4.783A.713.713 0 0 0 3 12c0 .247.13.475.344.607l4.835 2.976a.744.744 0 0 0 1.012-.224.709.709 0 0 0-.231-.99L5.113 12l5.657-3.484v8.267c0 .396.329.717.734.717a.726.726 0 0 0 .734-.717Z"
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
export default ArrowLeft3Broken
