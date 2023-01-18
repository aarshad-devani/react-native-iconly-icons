import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const VolumeDownCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18.656 8.635a7.568 7.568 0 0 1 0 7.305" />
      <Path
        clipRule="evenodd"
        d="M4.667 12.287c-.003 1.219 0 2.648 1.006 3.503 1.007.855 1.806.502 3.108.93 1.303.43 3.128 3.077 5.144 1.881 1.09-.774 1.603-2.235 1.603-6.314 0-4.078-.49-5.523-1.603-6.313-2.016-1.195-3.841 1.452-5.144 1.88-1.302.43-2.101.077-3.108.931-1.006.854-1.01 2.284-1.006 3.502Z"
      />
    </G>
  </Svg>
)
export default VolumeDownCurved
