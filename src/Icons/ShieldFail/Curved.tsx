import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ShieldFailCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M11.985 21.606c2.334 0 7.672-2.322 7.672-8.727 0-6.404.278-6.905-.338-7.521-.616-.616-3.825-2.607-7.334-2.607-3.509 0-6.719 1.99-7.335 2.607-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.673 8.728Z"
      />
      <Path d="m13.864 13.825-3.759-3.758M10.105 13.825l3.76-3.758" />
    </G>
  </Svg>
)
export default ShieldFailCurved
