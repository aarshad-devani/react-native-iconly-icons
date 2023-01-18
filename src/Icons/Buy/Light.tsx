import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BuyLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m2.75 3.25 2.08.36.963 11.473a1.8 1.8 0 0 0 1.8 1.653h10.909a1.8 1.8 0 0 0 1.785-1.546l.949-6.558a1.341 1.341 0 0 0-1.135-1.52C20.037 7.105 5.164 7.1 5.164 7.1M14.125 10.795h2.773"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.154 20.203a.544.544 0 1 1 0 1.087.544.544 0 0 1 0-1.087ZM18.435 20.203a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09Z"
      fill={props.fillColor}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default BuyLight
