import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const UnlockCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.276 5.988A4.563 4.563 0 0 0 7.35 7.235v2.169M11.91 14.156v2.221" />
      <Path
        clipRule="evenodd"
        d="M11.91 8.824c-5.745 0-7.66 1.568-7.66 6.271 0 4.704 1.915 6.272 7.66 6.272 5.746 0 7.661-1.568 7.661-6.272 0-4.703-1.915-6.27-7.661-6.27Z"
      />
    </G>
  </Svg>
)
export default UnlockCurved
