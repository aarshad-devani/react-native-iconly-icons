import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowRight3Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12.7 12.106H3.75" />
      <Path
        clipRule="evenodd"
        d="M20.354 12.1c0-1.256-6.364-5.27-7.086-4.549-.722.722-.791 8.307 0 9.098.792.791 7.086-3.294 7.086-4.549Z"
      />
    </G>
  </Svg>
)
export default ArrowRight3Curved
