import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SendCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M11.493 12.438S-.483 9.961 3.68 7.558C7.19 5.531 19.295 2.045 20.986 2.946c.9 1.69-2.585 13.795-4.613 17.307-2.402 4.162-4.88-7.815-4.88-7.815Z"
      />
      <Path d="m11.493 12.438 9.493-9.492" />
    </G>
  </Svg>
)
export default SendCurved
