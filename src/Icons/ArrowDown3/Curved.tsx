import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDown3Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.894 12.7V3.75" />
      <Path
        clipRule="evenodd"
        d="M11.9 20.354c1.256 0 5.27-6.364 4.549-7.086-.722-.722-8.307-.791-9.098 0-.791.792 3.294 7.086 4.549 7.086Z"
      />
    </G>
  </Svg>
)
export default ArrowDown3Curved
