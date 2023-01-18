import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CallSilentCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.109 13.057c-4.586-5.36-3.738-7.93-3.1-8.832.095-.17 2.399-3.61 4.86-1.593 4.852 4.003 1 4.385 1.743 6.922M11.585 12.314c4.927 4.746 4.3-2.728 9.278 3.313 2.028 2.473-1.422 4.766-1.592 4.862-.997.722-4.108 1.688-10.87-4.99M2 21.5 20.5 3" />
    </G>
  </Svg>
)
export default CallSilentCurved
