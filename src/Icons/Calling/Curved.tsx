import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CallingCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14.352 2.75a7.971 7.971 0 0 1 7.041 7.032M14.352 6.293a4.426 4.426 0 0 1 3.5 3.5" />
      <Path
        clipRule="evenodd"
        d="M7.7 16.299C.803 9.4 1.783 6.241 2.51 5.223c.094-.164 2.396-3.611 4.865-1.589 6.126 5.045-1.63 4.332 3.514 9.477 5.146 5.144 4.431-2.611 9.477 3.514 2.022 2.469-1.425 4.771-1.588 4.864-1.018.728-4.178 1.709-11.078-5.19Z"
      />
    </G>
  </Svg>
)
export default CallingCurved
