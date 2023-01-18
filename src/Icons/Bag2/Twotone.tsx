import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Bag2Twotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M15.773 9.305V6.273A3.772 3.772 0 0 0 12 2.5a3.773 3.773 0 0 0-3.79 3.756v3.049"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.742 21H7.258A4.256 4.256 0 0 1 3 16.745V11.23a4.256 4.256 0 0 1 4.258-4.255h9.484A4.256 4.256 0 0 1 21 11.23v5.516A4.256 4.256 0 0 1 16.742 21Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Bag2Twotone
