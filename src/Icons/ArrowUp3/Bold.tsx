import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowUp3Bold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M6.59 11.858c.126.234.366.38.627.38h4.066v8.028c0 .405.321.734.717.734a.726.726 0 0 0 .717-.734v-8.028h4.066a.713.713 0 0 0 .627-.38.748.748 0 0 0-.02-.745l-4.783-7.77A.714.714 0 0 0 12 3a.714.714 0 0 0-.607.343l-4.783 7.77a.754.754 0 0 0-.02.745"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowUp3Bold
