import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const HideCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71M19.85 8.61c.89 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.8-.13-2.63-.36" />
      <Path d="M9.766 14.367a3.12 3.12 0 0 1-.925-2.229 3.159 3.159 0 0 1 5.394-2.24M15.11 12.7a3.158 3.158 0 0 1-2.537 2.541M19.892 4.25 4.118 20.024" />
    </G>
  </Svg>
)
export default HideCurved
