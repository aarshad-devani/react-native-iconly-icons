import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const VolumeOffCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8.403 16.553c-1.082-.25-1.816-.053-2.72-.814-1.01-.859-1.02-2.3-1.01-3.525-.01-1.226 0-2.666 1.01-3.525 1.012-.86 1.817-.51 3.132-.94 1.306-.43 3.14-3.096 5.172-1.897.823.582 1.306 1.53 1.503 3.615M15.58 13.672c-.117 3.006-.636 4.214-1.593 4.894-1.038.618-2.031.215-2.917-.384M20.285 4.67 4.941 20.017" />
    </G>
  </Svg>
)
export default VolumeOffCurved
