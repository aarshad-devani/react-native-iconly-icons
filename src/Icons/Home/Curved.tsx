import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const HomeCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9.079 16.136h5.815" />
      <Path
        clipRule="evenodd"
        d="M2.4 13.713c0-5.631.614-5.238 3.919-8.303C7.765 4.246 10.015 2 11.958 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C21.572 22 19.612 22 11.986 22 4.359 22 2.4 22 2.4 13.713Z"
      />
    </G>
  </Svg>
)
export default HomeCurved
