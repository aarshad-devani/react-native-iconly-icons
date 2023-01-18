import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PlusCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12.037 8.463v7.148M15.615 12.037H8.459" />
      <Path
        clipRule="evenodd"
        d="M2.3 12.037C2.3 4.735 4.735 2.3 12.037 2.3s9.737 2.435 9.737 9.737-2.435 9.737-9.737 9.737S2.3 19.339 2.3 12.037Z"
      />
    </G>
  </Svg>
)
export default PlusCurved
