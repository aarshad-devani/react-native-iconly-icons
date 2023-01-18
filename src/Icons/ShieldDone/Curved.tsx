import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ShieldDoneCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M11.985 21.606c2.335 0 7.672-2.322 7.672-8.727 0-6.404.278-6.905-.337-7.521-.616-.616-3.826-2.607-7.335-2.607-3.51 0-6.72 1.99-7.334 2.607-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.672 8.728Z"
      />
      <Path d="m9.386 11.875 1.892 1.895 3.898-3.9" />
    </G>
  </Svg>
)
export default ShieldDoneCurved
