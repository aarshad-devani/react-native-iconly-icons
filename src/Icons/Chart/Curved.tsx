import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ChartCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7.483 10.261v6.694M12.037 7.057v9.898M16.516 13.798v3.157" />
      <Path
        clipRule="evenodd"
        d="M2.3 12.037C2.3 4.735 4.735 2.3 12.037 2.3s9.737 2.435 9.737 9.737-2.435 9.737-9.737 9.737S2.3 19.339 2.3 12.037Z"
      />
    </G>
  </Svg>
)
export default ChartCurved
