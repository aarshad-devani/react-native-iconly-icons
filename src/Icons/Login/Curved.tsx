import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const LoginCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14.791 12.12H2.75M11.864 9.205l2.928 2.916-2.928 2.916" />
      <Path d="M7.259 7.63c.33-3.58 1.67-4.88 7-4.88 7.1 0 7.1 2.31 7.1 9.25 0 6.94 0 9.25-7.1 9.25-5.33 0-6.67-1.3-7-4.88" />
    </G>
  </Svg>
)
export default LoginCurved
