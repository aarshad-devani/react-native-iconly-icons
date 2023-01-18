import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeft3Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.3 11.894h8.95" />
      <Path
        clipRule="evenodd"
        d="M3.646 11.9c0 1.256 6.364 5.27 7.086 4.549.722-.722.791-8.307 0-9.098-.792-.791-7.086 3.294-7.086 4.549Z"
      />
    </G>
  </Svg>
)
export default ArrowLeft3Curved
