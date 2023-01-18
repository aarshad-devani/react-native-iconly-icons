import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDown3Bold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M17.41 12.142a.715.715 0 0 0-.627-.38h-4.066V3.734A.726.726 0 0 0 12 3a.726.726 0 0 0-.717.734v8.028H7.217a.712.712 0 0 0-.627.38.748.748 0 0 0 .02.745l4.783 7.77c.132.214.36.343.607.343s.475-.13.607-.343l4.783-7.77a.754.754 0 0 0 .02-.745"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowDown3Bold
