import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SendLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m15.832 8.175-5.723 5.784-6.51-4.071c-.932-.584-.738-2 .317-2.31L19.37 3.054c.966-.283 1.862.62 1.575 1.589l-4.573 15.445c-.313 1.056-1.722 1.245-2.3.308l-3.967-6.435"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SendLight
