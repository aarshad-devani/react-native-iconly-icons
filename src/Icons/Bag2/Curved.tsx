import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Bag2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15.75 9.472V6.44a3.781 3.781 0 1 0-7.562-.017v3.049" />
      <Path
        clipRule="evenodd"
        d="M2.95 14.207c0-5.294 2.255-7.059 9.019-7.059s9.019 1.765 9.019 7.06c0 5.292-2.255 7.057-9.019 7.057s-9.02-1.765-9.02-7.058Z"
      />
    </G>
  </Svg>
)
export default Bag2Curved
