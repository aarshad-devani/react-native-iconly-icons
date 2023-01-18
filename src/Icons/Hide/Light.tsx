import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HideLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M9.76 14.367a3.123 3.123 0 0 1-.925-2.23A3.16 3.16 0 0 1 12 8.973c.867 0 1.665.35 2.23.925M15.105 12.699a3.158 3.158 0 0 1-2.537 2.542"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.655 17.472c-1.587-1.246-2.931-3.066-3.905-5.335.984-2.279 2.337-4.109 3.934-5.365C8.27 5.516 10.1 4.834 11.999 4.834c1.91 0 3.74.692 5.336 1.957M19.448 8.99a15.358 15.358 0 0 1 1.802 3.147c-1.968 4.557-5.444 7.302-9.25 7.302a7.98 7.98 0 0 1-2.532-.413M19.887 4.25 4.113 20.024"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default HideLight
