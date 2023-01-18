import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const GameCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9.255 12.063v3.575M11.08 13.85H7.43M15.477 12.171h-.102M17.208 15.583h-.102M8.514 2.216a1.293 1.293 0 0 0 1.306 1.28h1.008a2.005 2.005 0 0 1 2.02 1.978v1.007" />
      <Path
        clipRule="evenodd"
        d="M21.812 13.895c0-5.56-2.387-7.414-9.547-7.414-7.162 0-9.549 1.854-9.549 7.414 0 5.561 2.387 7.414 9.549 7.414 7.16 0 9.547-1.853 9.547-7.414Z"
      />
    </G>
  </Svg>
)
export default GameCurved
