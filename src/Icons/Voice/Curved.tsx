import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const VoiceCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M6.365 13.678a5.67 5.67 0 0 0 11.339 0M17.703 10.423V8.169a5.67 5.67 0 0 0-11.338 0v2.254M12.034 21.5v-2.152M4.9 13.678h14.268" />
    </G>
  </Svg>
)
export default VoiceCurved
