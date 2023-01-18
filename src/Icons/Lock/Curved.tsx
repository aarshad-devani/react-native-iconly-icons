import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const LockCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.47 9.403V7.254a4.561 4.561 0 0 0-9.12-.02v2.17M11.91 14.156v2.221" />
      <Path
        clipRule="evenodd"
        d="M11.91 8.824c-5.745 0-7.66 1.568-7.66 6.271 0 4.704 1.915 6.272 7.66 6.272s7.661-1.568 7.661-6.272c0-4.703-1.916-6.27-7.66-6.27Z"
      />
    </G>
  </Svg>
)
export default LockCurved
