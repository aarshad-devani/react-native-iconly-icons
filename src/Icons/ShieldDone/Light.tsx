import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShieldDoneLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.278-6.905-.337-7.521-.616-.616-6.33-2.608-7.335-2.608-1.006 0-6.72 1.992-7.334 2.608-.616.616-.338 1.116-.338 7.521 0 6.404 7.672 8.727 7.672 8.727Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m9.386 11.875 1.892 1.895 3.898-3.9"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ShieldDoneLight
