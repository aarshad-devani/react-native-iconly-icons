import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PasswordCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M10.689 12a1.852 1.852 0 1 1-1.852-1.852h.003A1.851 1.851 0 0 1 10.689 12Z"
      />
      <Path d="M10.692 12h6.318v1.852M14.182 13.852V12" />
      <Path
        clipRule="evenodd"
        d="M2.75 12c0-6.937 2.313-9.25 9.25-9.25 6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25-6.937 0-9.25-2.313-9.25-9.25Z"
      />
    </G>
  </Svg>
)
export default PasswordCurved
