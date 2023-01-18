import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VoiceLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12 22v-3.161"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12 14.848v0c-2.243 0-4.062-1.826-4.062-4.08V6.081C7.938 3.827 9.757 2 12 2c2.244 0 4.062 1.827 4.062 4.08v4.688A4.07 4.07 0 0 1 12 14.848Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 10.8c0 4.44-3.581 8.038-8 8.038-4.419 0-8-3.599-8-8.037"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VoiceLight
