import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const WorkCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.961 16.517v-2.628M21.09 11.477l-.03.021c-2.421 1.493-5.62 2.394-9.103 2.394-3.484 0-6.673-.901-9.094-2.393l-.03-.022" />
      <Path
        clipRule="evenodd"
        d="M2.75 13.35c0-6.151 2.303-8.202 9.211-8.202 6.91 0 9.211 2.05 9.211 8.203 0 6.152-2.302 8.203-9.21 8.203-6.909 0-9.212-2.051-9.212-8.203Z"
      />
      <Path d="M15.224 5.37v-.63c0-1.265-.923-2.29-2.06-2.29h-2.405c-1.137 0-2.06 1.025-2.06 2.29v.63" />
    </G>
  </Svg>
)
export default WorkCurved
