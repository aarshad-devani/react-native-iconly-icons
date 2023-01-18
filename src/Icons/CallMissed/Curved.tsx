import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CallMissedCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m21.328 2.75-6 6M15.328 2.75l6 6" />
      <Path
        clipRule="evenodd"
        d="M7.701 16.299C.802 9.4 1.783 6.241 2.511 5.222c.093-.163 2.395-3.61 4.864-1.588 6.126 5.045-1.63 4.332 3.515 9.477 5.144 5.144 4.43-2.611 9.476 3.514 2.022 2.469-1.425 4.77-1.588 4.864-1.02.728-4.178 1.709-11.077-5.19Z"
      />
    </G>
  </Svg>
)
export default CallMissedCurved
