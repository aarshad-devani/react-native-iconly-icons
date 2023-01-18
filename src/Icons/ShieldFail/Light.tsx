import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShieldFailLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.278-6.905-.338-7.521-.615-.616-6.328-2.608-7.334-2.608-1.006 0-6.72 1.992-7.335 2.608-.615.616-.337 1.116-.337 7.521 0 6.404 7.672 8.727 7.672 8.727Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m13.864 13.825-3.758-3.758M10.106 13.825l3.758-3.758"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ShieldFailLight
